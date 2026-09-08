import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { $ } from 'bun';

const root = join(import.meta.dir, '..');
const contentDir = join(root, 'src/content');
const resumeDir = join(root, 'resume');
const publicDir = join(root, 'public');
const dataPath = join(resumeDir, 'data.json');
const typstPath = join(resumeDir, 'resume.typ');
const bibPath = join(resumeDir, 'personal-publications.bib');
const pdfPath = join(publicDir, 'resume.pdf');

const REQUIRED_FONTS = ['Noto Sans', 'Libertinus Serif'] as const;

type YamlRecord = Record<string, unknown>;

function isRecord(value: unknown): value is YamlRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requireString(obj: YamlRecord, key: string, file: string): string {
  const value = obj[key];
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`${file}: missing non-empty string "${key}"`);
  }
  return value;
}

function optionalString(obj: YamlRecord, key: string, file: string): string | undefined {
  if (!(key in obj) || obj[key] === undefined || obj[key] === null) {
    return undefined;
  }
  const value = obj[key];
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`${file}: "${key}" must be a non-empty string when present`);
  }
  return value;
}

function requireNumber(obj: YamlRecord, key: string, file: string): number {
  const value = obj[key];
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`${file}: missing number "${key}"`);
  }
  return value;
}

function requireStringArray(obj: YamlRecord, key: string, file: string): string[] {
  const value = obj[key];
  if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
    throw new Error(`${file}: "${key}" must be an array of strings`);
  }
  return value;
}

function parseFrontmatter(raw: string, file: string): YamlRecord {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${file}: expected YAML frontmatter delimited by ---`);
  }
  const parsed = Bun.YAML.parse(match[1]);
  if (!isRecord(parsed)) {
    throw new Error(`${file}: frontmatter must be a mapping`);
  }
  return parsed;
}

function parseYamlFile(raw: string, file: string): YamlRecord {
  const parsed = Bun.YAML.parse(raw);
  if (!isRecord(parsed)) {
    throw new Error(`${file}: expected a YAML mapping`);
  }
  return parsed;
}

async function loadEntries(collection: string): Promise<{ file: string; data: YamlRecord }[]> {
  const dir = join(contentDir, collection);
  const names = (await readdir(dir)).filter((name) => !name.startsWith('.'));
  if (names.length === 0) {
    throw new Error(`${collection} has no entries`);
  }

  const entries = await Promise.all(
    names.map(async (name) => {
      const file = join(collection, name);
      const raw = await readFile(join(dir, name), 'utf8');
      const ext = extname(name);
      const data =
        ext === '.md' ? parseFrontmatter(raw, file) : parseYamlFile(raw, file);
      return { file, data };
    }),
  );

  entries.sort(
    (a, b) => requireNumber(b.data, 'sortIndex', b.file) - requireNumber(a.data, 'sortIndex', a.file),
  );
  return entries;
}

function displayHref(href: string): string {
  if (href.startsWith('mailto:')) {
    return href.slice('mailto:'.length);
  }
  return href
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');
}

function skillDetail(
  item: YamlRecord,
  group: string,
  nowYear: number,
): { name: string; detail: string } {
  const name = requireString(item, 'name', group);
  const level = requireString(item, 'level', group);
  const durationKeys = ['since', 'years', 'months'].filter((key) => key in item);
  if (durationKeys.length !== 1) {
    throw new Error(
      `${group} / ${name}: exactly one of since, years, months is required`,
    );
  }

  const key = durationKeys[0];
  const value = item[key];
  if (typeof value !== 'number' || value < 0) {
    throw new Error(`${group} / ${name}: "${key}" must be a non-negative number`);
  }

  if (key === 'since') {
    const years = nowYear - value;
    if (years < 0) {
      throw new Error(`${group} / ${name}: since ${value} is in the future`);
    }
    return { name, detail: `${years} ${years === 1 ? 'year' : 'years'}; ${level}` };
  }
  if (key === 'years') {
    return { name, detail: `${value} ${value === 1 ? 'year' : 'years'}; ${level}` };
  }
  return { name, detail: `${value} ${value === 1 ? 'month' : 'months'}; ${level}` };
}

async function loadSkills() {
  const file = 'src/tech-skills.yaml';
  const parsed = Bun.YAML.parse(await readFile(join(root, file), 'utf8'));
  if (!isRecord(parsed)) {
    throw new Error(`${file}: expected a mapping of skill groups`);
  }

  const nowYear = new Date().getFullYear();
  const groups = Object.entries(parsed).map(([key, group]) => {
    if (!isRecord(group)) {
      throw new Error(`${file}: group "${key}" must be a mapping`);
    }
    const prettyName = requireString(group, 'prettyName', `${file} / ${key}`);
    const list = group.list;
    if (!Array.isArray(list) || list.length === 0) {
      throw new Error(`${file} / ${key}: list must be a non-empty array`);
    }
    return {
      prettyName,
      list: list.map((item, index) => {
        if (!isRecord(item)) {
          throw new Error(`${file} / ${key}: skill ${index} must be a mapping`);
        }
        return skillDetail(item, `${file} / ${key}`, nowYear);
      }),
    };
  });

  if (groups.length === 0) {
    throw new Error(`${file}: no skill groups`);
  }
  return groups;
}

async function loadContact() {
  const file = 'src/resume-contact.yaml';
  const contact = parseYamlFile(await readFile(join(root, file), 'utf8'), file);
  const email = requireString(contact, 'email', file);
  const github = requireString(contact, 'github', file);
  const linkedin = requireString(contact, 'linkedin', file);
  const website = requireString(contact, 'website', file);
  return {
    name: requireString(contact, 'name', file),
    location: requireString(contact, 'location', file),
    links: [
      { href: `mailto:${email}`, label: displayHref(`mailto:${email}`) },
      { href: github, label: displayHref(github) },
      { href: linkedin, label: displayHref(linkedin) },
      { href: website, label: displayHref(website) },
    ],
  };
}

async function exportData() {
  const education = (await loadEntries('resume-education')).map(({ file, data }) => {
    const entry: YamlRecord = {
      name: requireString(data, 'name', file),
      when: requireString(data, 'graduation', file),
      location: requireString(data, 'location', file),
      notes: requireStringArray(data, 'notes', file),
    };
    const gpa = optionalString(data, 'gpa', file);
    if (gpa !== undefined) {
      entry.gpa = gpa;
    }
    return entry;
  });

  const research = (await loadEntries('resume-research-experience')).map(({ file, data }) => {
    const entry: YamlRecord = {
      name: requireString(data, 'name', file),
      start: requireString(data, 'start', file),
      end: requireString(data, 'end', file),
      location: requireString(data, 'location', file),
      advisors: requireStringArray(data, 'advisors', file),
      notes: requireStringArray(data, 'notes', file),
    };
    const link = optionalString(data, 'link', file);
    if (link !== undefined) {
      entry.link = link;
    }
    return entry;
  });

  const dated = async (collection: string) =>
    (await loadEntries(collection)).map(({ file, data }) => ({
      name: requireString(data, 'name', file),
      start: requireString(data, 'start', file),
      end: requireString(data, 'end', file),
      location: requireString(data, 'location', file),
      notes: requireStringArray(data, 'notes', file),
    }));

  const honors = (await loadEntries('resume-honors')).map(({ file, data }) => ({
    text: requireString(data, 'text', file),
  }));

  return {
    contact: await loadContact(),
    education,
    research,
    leadership: await dated('resume-leadership-teaching-experience'),
    tech: await dated('resume-tech-experience'),
    skills: await loadSkills(),
    honors,
  };
}

async function assertTypst() {
  const typst = Bun.which('typst');
  if (!typst) {
    throw new Error(
      'typst is required to build resume.pdf. Install Typst 0.15+ and keep it on PATH.',
    );
  }

  const fonts = await $`${typst} fonts`.text();
  for (const family of REQUIRED_FONTS) {
    if (!fonts.split('\n').includes(family)) {
      throw new Error(
        `typst cannot see the "${family}" font. Install it before building the resume.`,
      );
    }
  }
}

async function main() {
  await assertTypst();
  try {
    await readFile(bibPath);
  } catch {
    throw new Error(`missing bibliography: ${bibPath}`);
  }
  const data = await exportData();
  await mkdir(resumeDir, { recursive: true });
  await mkdir(publicDir, { recursive: true });
  await writeFile(dataPath, `${JSON.stringify(data, null, 2)}\n`);

  const result = await $`typst compile ${typstPath} ${pdfPath}`.nothrow();
  if (result.exitCode !== 0) {
    throw new Error(
      `typst compile failed with exit ${result.exitCode}\n${result.stderr.toString()}\n${result.stdout.toString()}`,
    );
  }
}

await main();
