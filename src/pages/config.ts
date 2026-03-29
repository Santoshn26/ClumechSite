import { defineCollection, z } from 'astro:content';

// Schema for the case studies collection
const caseStudiesCollection = defineCollection({
  type: 'content', // Use 'content' for Markdown files
  schema: z.object({
    title: z.string(),
    customer: z.string(),
    industry: z.string(),
    publishDate: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    // Key results to be highlighted
    results: z.array(z.object({
        value: z.string(),
        metric: z.string(),
    })),
    // Customer testimonial
    testimonial: z.object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
    }),
    // Optional image for the case study
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }).optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  'case-studies': caseStudiesCollection,
};