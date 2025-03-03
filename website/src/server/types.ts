import type { PortableTextBlock } from 'next-sanity';

export type Category = 'writing' | 'technical';

export type Post = {
  _id: string;
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  publishedAt: string;
  quote: string | null;
  quoteAuthor: string | null;
  estimatedReadingTime: number;
  body: Array<PortableTextBlock>;
  tags: Array<{
    title: string;
    slug: string;
  }>;
};

export type PostPreview = Pick<
  Post,
  | '_id'
  | 'title'
  | 'category'
  | 'excerpt'
  | 'slug'
  | 'publishedAt'
  | 'tags'
  | 'estimatedReadingTime'
>;
