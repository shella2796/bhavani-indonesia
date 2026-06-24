export type Settings = {
  organizationName?: string;
  tagline?: string;
  description?: string;
  email?: string;
  instagram?: string;
  vision?: string;
  mission?: string[];
  heroTitle?: string;
  heroText?: string;
};

export type Article = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  publishedAt?: string;
  coverImage?: unknown;
  body?: unknown[];
};

export type Program = {
  _id: string;
  title: string;
  shortDescription?: string;
  date?: string;
  image?: unknown;
  isFeatured?: boolean;
};
