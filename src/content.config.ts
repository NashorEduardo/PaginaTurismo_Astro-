import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tourSchema = z.object({
  title: z.string(),
  price: z.string(),
  duration: z.string(),
  image: z.string(),
  wetravelUuid: z.string().optional(),
  featured: z.boolean().optional(),
  description: z.string().optional(),
  availability: z.string().optional(),
  frequency: z.string().optional(),
  difficulty: z.string().optional(),
  includes: z.array(z.string()).optional(),
  excludes: z.array(z.string()).optional(),
  itinerary: z.array(z.object({
    day: z.number(),
    title: z.string(),
    description: z.string().optional(),
    activities: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
  })).optional(),
  gallery: z.array(z.string()).optional(),
  videoUrl: z.string().optional(),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
});

const toursEs = defineCollection({
  loader: glob({ pattern: '**/es/*.md', base: './src/content/tours' }),
  schema: tourSchema,
});

const toursEn = defineCollection({
  loader: glob({ pattern: '**/en/*.md', base: './src/content/tours' }),
  schema: tourSchema,
});

const toursPt = defineCollection({
  loader: glob({ pattern: '**/pt/*.md', base: './src/content/tours' }),
  schema: tourSchema,
});

export const collections = {
  'tours-es': toursEs,
  'tours-en': toursEn,
  'tours-pt': toursPt,
};