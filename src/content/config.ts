import { defineCollection, z } from 'astro:content';

const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    gpa: z.string(),
    graduation: z.string(),
    location: z.string(),
    notes: z.array(z.string()),
    sortIndex: z.number(), // sorted backwards, so oldest should have index 1
  }),
});

const researchExperienceCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image().optional(),
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
      sortIndex: z.number(), // sorted backwards, so oldest should have index 1
    }),
});

export const collections = {
  education: educationCollection,
  researchExperience: researchExperienceCollection,
  leadershipTeachingExperience: leadershipTeachingExperienceCollection,
  techExperience: techExperienceCollection,
};

export const sortBySortIndex = (a: any, b: any) => {
  return b.data.sortIndex - a.data.sortIndex; // sorting backwards
};
