import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postsEN = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/en/posts/',
        generateId: ({ entry }) => entry.replace(/^.*[\\/]/, '').replace('.md', ''),
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            image: image(),
        }),
});

const projectsEN = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/en/projects',
        generateId: ({ entry }) => entry.replace(/^.*[\\/]/, '').replace('.md', ''),
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            timeline: z.string(),
            image: image(),
            thumbnail: image(),
            link: z.string().optional(),
            priority: z.number(),
        }),
});

const postsFR = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/fr/posts/',
        generateId: ({ entry }) => entry.replace(/^.*[\\/]/, '').replace('.md', ''),
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.date(),
            image: image(),
        }),
});

const projectsFR = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/fr/projects',
        generateId: ({ entry }) => entry.replace(/^.*[\\/]/, '').replace('.md', ''),
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            author: z.string(),
            timeline: z.string(),
            image: image(),
            thumbnail: image(),
            link: z.string().optional(),
            priority: z.number(),
        }),
});

export const collections = { projectsEN: projectsEN, postsEN: postsEN, projectsFR: projectsFR, postsFR: postsFR };
