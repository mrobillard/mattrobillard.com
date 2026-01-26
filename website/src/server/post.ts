import { cms } from '@/lib/sanity';
import { unstable_noStore as noStore } from 'next/cache';
import { Post, PostPreview } from './types';

export const getPostsPreview = async (
  category: 'writing' | 'technical',
): Promise<Array<PostPreview>> => {
  noStore(); // always fetch fresh content (avoid per-process caching)

  const data = await cms.fetch<Array<PostPreview>>(
    `*[_type == "post" && visible == true && category == $category] | order(_createdAt desc) {
      _id,
      category,
      "slug": slug.current,
      title,
      excerpt,
      publishedAt,
      "tags": tags[] -> { title, "slug": slug.current },
      "estimatedReadingTime": round(length(pt::text(body)) / $meanWordLength / $wpm),
    }
  `,
    {
      category,
      wpm: 180,
      meanWordLength: 5,
    },
  );

  return data;
};

export const getPostBySlug = async (
  slug: string,
  category: 'writing' | 'technical',
): Promise<Post | null> => {
  noStore(); // always fetch fresh content (avoid per-process caching)

  const data = await cms.fetch<Post>(
    `*[_type == "post" && visible ==true && category == $category && slug.current == $slug][0] {
      _id,
      category,
      "slug": slug.current,
      title,
      excerpt,
      publishedAt,
      "tags": tags[] -> { title, "slug": slug.current },
      quote,
      quoteAuthor,
      body,
      "estimatedReadingTime": round(length(pt::text(body)) / $meanWordLength / $wpm),
    }
  `,
    {
      slug,
      category,
      wpm: 180,
      meanWordLength: 5,
    },
  );

  return data ?? null;
};
