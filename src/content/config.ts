import { defineCollection, z } from 'astro:content';

const educationCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      gpa: z.string().optional(),
      graduation: z.string(),
      location: z.string(),
      notes: z.array(z.string()),
      cover: image().optional(),
      coverBorder: z.boolean().optional().default(false),
      sortIndex: z.number(), // sorted backwards, so oldest should have index 1
    }),
});

const researchExperienceCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image().optional(),
      coverBorder: z.boolean().optional().default(false),
      link: z.string().optional(),
      start: z.string(),
      end: z.string(),
      location: z.string(),
      advisors: z.array(z.string()),
      notes: z.array(z.string()),
      sortIndex: z.number(), // sorted backwards, so oldest should have index 1
    }),
});

const leadershipTeachingExperienceCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image().optional(),
      coverBorder: z.boolean().optional().default(false),
      start: z.string(),
      end: z.string(),
      location: z.string(),
      notes: z.array(z.string()),
      sortIndex: z.number(), // sorted backwards, so oldest should have index 1
    }),
});

const techExperienceCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      start: z.string(),
      end: z.string(),
      location: z.string(),
      notes: z.array(z.string()),
      cover: image().optional(),
      coverBorder: z.boolean().optional().default(false),
      sortIndex: z.number(), // sorted backwards, so oldest should have index 1
    }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    attachments: z
      .array(
        z.object({
          name: z.string(),
          link: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = {
  'resume-education': educationCollection,
  'resume-research-experience': researchExperienceCollection,
  'resume-leadership-teaching-experience':
    leadershipTeachingExperienceCollection,
  'resume-tech-experience': techExperienceCollection,
  blog: blogCollection,
};

export const sortBySortIndex = (a: any, b: any) => {
  return b.data.sortIndex - a.data.sortIndex; // sorting backwards
};
