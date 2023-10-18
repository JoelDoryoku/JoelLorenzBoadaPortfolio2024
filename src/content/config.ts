// Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content';

const terminal = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        order: z.number(),
        input: z.string(),
        return: z.any()
    })
});

const projects = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        date: z.date(),
        title: z.string(),
        desc: z.string(),
        skills: z.array(z.string()),
        demoLink: z.string(),
        sourceLink: z.string(),
        image: z.string()
    })
});

export const collections = {
    'terminal': terminal,
    'projects': projects
  };