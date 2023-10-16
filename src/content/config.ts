// Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

const terminal = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        input: z.string(),
        return: z.any()
    })
});

export const collections = {
    'terminal': terminal,
  };