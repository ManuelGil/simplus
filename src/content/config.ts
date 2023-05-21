import { defineCollection, z } from "astro:content";

// Community collection schema
const communitiesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    keywords: z.string().default("community"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        mastodon: z.string().optional(),
        instagram: z.string().optional(),
        youtube: z.string().optional(),
        linkedin: z.string().optional(),
        twitch: z.string().optional(),
        github: z.string().optional(),
        gitlab: z.string().optional(),
        telegram: z.string().optional(),
        discord: z.string().optional(),
        slack: z.string().optional(),
        medium: z.string().optional(),
        devto: z.string().optional(),
        codepen: z.string().optional(),
        bitbucket: z.string().optional(),
        dribbble: z.string().optional(),
        behance: z.string().optional(),
        pinterest: z.string().optional(),
        soundcloud: z.string().optional(),
        spotify: z.string().optional(),
        anchor: z.string().optional(),
        tumblr: z.string().optional(),
        reddit: z.string().optional(),
        vk: z.string().optional(),
        whatsapp: z.string().optional(),
        snapchat: z.string().optional(),
        vimeo: z.string().optional(),
        tiktok: z.string().optional(),
        foursquare: z.string().optional(),
        meetup: z.string().optional(),
        eventbrite: z.string().optional(),
        rss: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        skype: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const creatorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    keywords: z.string().default("creator"),
    description: z.string().optional(),
    tags: z.array(z.string()).default(["others"]),
    social: z
      .object({
        facebook: z.string().optional(),
        twitter: z.string().optional(),
        mastodon: z.string().optional(),
        instagram: z.string().optional(),
        youtube: z.string().optional(),
        linkedin: z.string().optional(),
        twitch: z.string().optional(),
        github: z.string().optional(),
        gitlab: z.string().optional(),
        telegram: z.string().optional(),
        discord: z.string().optional(),
        slack: z.string().optional(),
        medium: z.string().optional(),
        devto: z.string().optional(),
        codepen: z.string().optional(),
        bitbucket: z.string().optional(),
        dribbble: z.string().optional(),
        behance: z.string().optional(),
        pinterest: z.string().optional(),
        soundcloud: z.string().optional(),
        spotify: z.string().optional(),
        anchor: z.string().optional(),
        tumblr: z.string().optional(),
        reddit: z.string().optional(),
        vk: z.string().optional(),
        whatsapp: z.string().optional(),
        snapchat: z.string().optional(),
        vimeo: z.string().optional(),
        tiktok: z.string().optional(),
        foursquare: z.string().optional(),
        rss: z.string().optional(),
        email: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        skype: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  communities: communitiesCollection,
  creators: creatorsCollection,
  pages: pagesCollection,
};
