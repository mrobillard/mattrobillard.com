import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import type { PostPreview } from '@/server/types';
import { TagButton } from './tag-button';

export function PostPreview({ post }: { post: PostPreview }) {
  return (
    <article className="text-navy flex w-full flex-col items-start gap-6">
      <div className="flex w-full items-start justify-between gap-8">
        <h2 className="flex-1 grow text-left font-serif text-3xl font-light tracking-wide md:text-4xl">
          {post.title}
        </h2>
        <div className="flex w-20 shrink-0 flex-col items-end gap-1 pt-2 text-xs font-semibold uppercase tracking-widest">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <span>{Math.max(post.estimatedReadingTime, 1)} min read</span>
        </div>
      </div>
      <hr className="w-full border-current" />
      <div className="flex w-full flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <Suspense
            key={tag.slug}
            fallback={
              <span className="bg-navy/5 block h-7 w-10 animate-pulse" />
            }
          >
            <TagButton tag={tag} />
          </Suspense>
        ))}
      </div>
      <p className="text-sm">{post.excerpt}</p>
      <Link
        href={`/${post.category}/${post.slug}`}
        className="group inline-flex items-center gap-2 font-semibold uppercase focus-visible:outline-none"
      >
        <span>Keep Reading</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
      </Link>
    </article>
  );
}
