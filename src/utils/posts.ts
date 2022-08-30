import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const POSTS_DIR = join(process.cwd(), 'posts');

export type QuoteItem = {
  content: string;

  author: string;
};

export type ArticleItem = {
  section: 'writing' | 'technical';
  title: string;
  date: string;
  content: string;
  excerpt: string;
  quote?: QuoteItem;
  year: number;
  slug: string;
  tags: string[];
};

export function getAllPosts(): ArticleItem[] {
  return readdirSync(POSTS_DIR)
    .map((postFileName) => {
      const postFullPath = join(POSTS_DIR, postFileName);
      const postData = readFileSync(postFullPath, 'utf-8');
      const { data, content } = matter(postData);

      return {
        section: data.section,
        title: data.title,
        date: data.date,
        slug: data.slug,
        excerpt: data.excerpt,
        quote: data.quote || null,
        year: data.year,
        tags: data.tags,
        content,
      };
    })
    .sort((post1, post2) => {
      return post1.date > post2.date ? -1 : 1;
    });
}

export function getAllWritingPosts(): ArticleItem[] {
  return getAllPosts().filter((post) => post.section === 'writing');
}

export function getAllTechnicalPosts(): ArticleItem[] {
  return getAllPosts().filter((post) => post.section === 'technical');
}

export function getWritingPostBySlug(slug: string) {
  const posts = getAllWritingPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getTechnicalPostBySlug(slug: string) {
  const posts = getAllTechnicalPosts();
  return posts.find((post) => post.slug === slug) || null;
}
