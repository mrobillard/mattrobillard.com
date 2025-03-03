import type { PostPreview } from '@/server/types';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
          <button
            key={tag.slug}
            className="hover:bg-navy focus-visible:bg-navy inline-flex overflow-hidden rounded border border-current px-3 py-1 text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
          >
            {tag.title}
          </button>
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
