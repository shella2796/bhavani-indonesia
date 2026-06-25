import {client, hasSanityConfig} from "./client";

export async function sanityFetch<T>(query: string, fallback: T): Promise<T> {
  if (!hasSanityConfig) return fallback;
  try {
    const result = await client.fetch<T | null>(query, {}, {next: {revalidate: 60}});
    if (Array.isArray(result) && result.length === 0) return fallback;
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export const settingsQuery = `*[_type == "siteSettings"][0]{
  organizationName, tagline, description, email, instagram, vision, mission, heroTitle, heroText
}`;
export const articlesQuery = `*[_type == "article"] | order(publishedAt desc){
  _id, title, "slug": slug.current, excerpt, category, publishedAt, coverImage, body
}`;
export const programsQuery = `*[_type == "program"] | order(order asc){
  _id, title, "slug": slug.current, pillar, shortDescription, description, date, image, isFeatured, highlights
}`;
export const peopleQuery = `*[_type == "person"] | order(order asc){
  _id, name, role, bio, photo
}`;
