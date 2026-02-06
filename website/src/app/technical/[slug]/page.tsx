import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { PostContent } from '@/components/post-content';
import { PostQuote } from '@/components/post-quote';
import { PostTitle } from '@/components/post-title';
import { getPostBySlug } from '@/server/post';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug, 'technical');
  if (!post) {
    notFound();
  }
  const ogParams = new URLSearchParams({ title: post.title });

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.map((tag) => tag.title),
    category: 'Technical',
    openGraph: {
      images: [`/api/og?${ogParams}`],
    },
  };
}

export default async function TechnicalPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getPostBySlug(slug, 'technical');
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-start">
      <Navbar pathname="technical" />
      <main className="flex w-full flex-1 grow flex-col items-start px-4 pb-32 md:px-8 lg:px-12">
        <section className="mx-auto flex w-full max-w-screen-md flex-col items-start gap-8">
          <div className="w-full py-4">
            <Link
              href="/technical"
              className="text-navy group inline-flex items-center gap-2 font-semibold uppercase tracking-widest focus-visible:outline-none"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-focus-visible:-translate-x-1" />
              <span>Back to technical</span>
            </Link>
          </div>
          <PostTitle post={post} />
          <PostQuote post={post} />
          <PostContent post={post} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
