import type { Post } from '@/server/types';

export function PostQuote({ post }: { post: Post }) {
  return (
    <blockquote className="border-navy relative mx-auto max-w-screen-lg border-x px-8 py-6 font-serif text-lg font-light italic">
      {post.quote}
      <span className="bg-navy pointer-events-none absolute bottom-0 left-0 h-px w-4" />
      <span className="bg-navy pointer-events-none absolute bottom-0 right-0 h-px w-4" />
      <span className="bg-navy pointer-events-none absolute left-0 top-0 h-px w-4" />
      <span className="bg-navy pointer-events-none absolute right-0 top-0 h-px w-4" />
      <span className="absolute -bottom-1 right-6 font-sans text-xs not-italic tracking-widest">
        - {post.quoteAuthor}
      </span>
    </blockquote>
  );
}
