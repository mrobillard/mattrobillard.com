import { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { PostPreview } from '@/components/post-preview';
import { getPostsPreview } from '@/server/post';

export const metadata: Metadata = {
  title: 'Technical',
};

export default async function TechnicalPage() {
  const posts = await getPostsPreview('technical');

  return (
    <div className="bg-background flex min-h-screen w-full flex-col items-start">
      <Navbar pathname="technical" />
      <main className="flex w-full flex-1 grow flex-col items-start px-4 md:px-8 lg:px-12">
        <section className="mx-auto flex w-full max-w-screen-sm flex-col gap-16">
          {posts.map((post) => (
            <PostPreview key={post._id} post={post} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
