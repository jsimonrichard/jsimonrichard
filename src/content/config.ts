import { defineCollection, z } from 'astro:content';

const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    gpa: z.string(),
    graduation: z.string(),
    location: z.string(),
    notes: z.array(z.string()),
  }),
});

const researchExperienceCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      cover: image().optional(),
      start: z.string(),
      end: z.string(),
      location: z.string(),
      advisors: z.array(z.string()),
      notes: z.array(z.string()),
    }),
});

export const collections = {
  education: educationCollection,
  researchExperience: researchExperienceCollection,
};
