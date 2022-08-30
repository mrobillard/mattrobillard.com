import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ArticleHeader from '@/components/ArticleHeader';
import Markdown from '@/components/Markdown';
import {
  ArticleItem,
  getAllTechnicalPosts,
  getTechnicalPostBySlug,
} from '@/utils/posts';

type WritingPageProps = {
  post: ArticleItem;
};

const TechnicalPostPage: NextPage<WritingPageProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>Matt Robillard / Technical</title>
      </Head>
      <main className="flex flex-col items-center justify-center grow w-full pt-[4rem] px-[2.4rem] pb-[15rem] md:pb-[20rem] overflow-hidden">
        <ArticleHeader {...post} />
        <Markdown>{post.content}</Markdown>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = (params || {})['slug'] as string;
  const post = getTechnicalPostBySlug(slug);

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
  const posts = getAllTechnicalPosts();

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

export default TechnicalPostPage;
