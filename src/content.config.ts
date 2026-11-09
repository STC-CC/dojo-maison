import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),                      // ex. "Avis produit"
    section: z.enum(['mannequins', 'guides']), // menu actif
    readingTime: z.string().optional(),        // ex. "6 min de lecture"
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
