import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useMemo } from 'react';

import Article from '@/components/Article';
import Breadcrumb from '@/components/Breadcrumb';
import Pagination from '@/components/Pagination';
import { useFilter } from '@/hooks/use-filter';
import { ArticleItem, getAllTechnicalPosts } from '@/utils/posts';

type TechnicalPageProps = {
  posts: ArticleItem[];
  years: number[];
};

const TechnicalPage: NextPage<TechnicalPageProps> = ({ posts, years }) => {
  const filter = useFilter();

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => filter.checkPost(post));
  }, [filter, posts]);

  return (
    <>
      <Head>
        <title>Matt Robillard / Technical</title>
      </Head>
      <main className="flex flex-col items-center justify-center grow w-full pb-[15rem] md:pb-[20rem] gap-[6.4rem]">
        <Breadcrumb />
        <div className="flex flex-col items-center gap-[5rem] md:gap-[7rem]">
          {filteredPosts.map((post) => (
            <Article
              {...post}
              key={`${post.section}-${post.slug}-${post.date}`}
            />
          ))}
        </div>
        <Pagination years={years} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllTechnicalPosts();
  const years: number[] = [];

  posts
    .map((post) => post.year)
    .forEach((year) => {
      if (!years.includes(year)) {
        years.push(year);
      }
    });

  return {
    props: {
      posts,
      years,
    },
  };
};

export default TechnicalPage;
