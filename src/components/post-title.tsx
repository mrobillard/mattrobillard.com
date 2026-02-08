import type { Post } from '@/server/types';

export function PostTitle({ post }: { post: Post }) {
  return (
    <div className="text-navy mx-auto flex w-full max-w-screen-sm flex-col items-start gap-6">
      <div className="flex w-full items-start justify-between gap-8">
        <h1 className="flex-1 grow text-left font-serif text-3xl font-light tracking-wide md:text-4xl">
          {post.title}
        </h1>
        <div className="flex w-20 shrink-0 flex-col items-end gap-1 pt-2 text-xs font-semibold uppercase tracking-widest">
          <time className="whitespace-nowrap" dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <span className="whitespace-nowrap">
            {Math.max(post.estimatedReadingTime, 1)} min read
          </span>
        </div>
      </div>
      <hr className="w-full border-current" />
      <div className="flex w-full flex-wrap items-center gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag.slug}
            className="inline-flex h-7overflow-hidden rounded border border-current px-3 py-1 text-xs font-semibold uppercase tracking-widest"
          >
            {tag.title}
          </span>
        ))}
      </div>
    </div>
  );
}
