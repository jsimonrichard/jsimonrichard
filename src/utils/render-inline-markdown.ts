function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function isSafeHref(href: string): boolean {
  return /^(https?:\/\/|mailto:)/i.test(href);
}

export function renderInlineMarkdown(
  markdown: string,
  options: { linkClass?: string } = {},
): string {
  const links: string[] = [];
  let linkIndex = 0;
  const classAttr = options.linkClass
    ? ` class="${escapeHtml(options.linkClass)}"`
    : '';

  const withLinkPlaceholders = markdown.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (match, label: string, href: string) => {
      if (!isSafeHref(href)) {
        return match;
      }
      const token = `@@MDLINK${linkIndex}@@`;
      links.push(
        `<a href="${escapeHtml(href)}"${classAttr} target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`,
      );
      linkIndex += 1;
      return token;
    },
  );

  let html = escapeHtml(withLinkPlaceholders)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+)\*/g, '<em>$1</em>');

  links.forEach((linkHtml, i) => {
    html = html.replaceAll(`@@MDLINK${i}@@`, linkHtml);
  });

  return html;
}
