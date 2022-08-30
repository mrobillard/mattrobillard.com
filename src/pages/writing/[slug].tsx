import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ArticleHeader from '@/components/ArticleHeader';
import Markdown from '@/components/Markdown';
import Quote from '@/components/Quote';
import {
  ArticleItem,
  getAllWritingPosts,
  getWritingPostBySlug,
} from '@/utils/posts';

type WritingPageProps = {
  post: ArticleItem;
};

const WritingPage: NextPage<WritingPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Matt Robillard / Writing</title>
      </Head>
      <main className="flex flex-col items-center justify-center grow w-full pt-[4rem] px-[2.4rem] pb-[15rem] md:pb-[20rem] overflow-hidden">
        <ArticleHeader {...post} />
        {post.quote && <Quote {...post.quote} />}
        <Markdown>{post.content}</Markdown>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = (params || {})['slug'] as string;
  const post = getWritingPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllWritingPosts();

  return {
    fallback: false,
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
  };
};

export default WritingPage;
