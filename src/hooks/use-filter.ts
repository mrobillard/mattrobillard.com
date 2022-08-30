import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

import { ArticleItem } from '@/utils/posts';

export function useFilter() {
  const router = useRouter();

  let { tags, year } = useMemo(() => {
    let year = new Date().getFullYear();
    let tags: string[] = [];

    if (typeof router.query['y'] === 'string') {
      year = parseInt(router.query['y']) || 2022;
    }

    if (typeof router.query['t'] === 'string' && router.query['t'].trim()) {
      tags = [decodeURIComponent(router.query['t'])];
    } else if (typeof router.query['t'] !== 'string') {
      tags = (router.query['t'] || []).map((t) => decodeURIComponent(t));
    }

    return { tags, year };
  }, [router.query]);

  const setYear = useCallback(
    (year: number) => {
      let q = '?';
      const tagFilter = tags.map((t) => encodeURIComponent(t)).join('&t=');

      if (year !== new Date().getFullYear()) {
        q += `y=${year}`;
      }

      if (Boolean(tags.length)) {
        q += `&t=${tagFilter}`;
      }

      if (q.trim() === '?') {
        q = '';
      }

      router.replace(`${router.pathname}${q}`, undefined, { shallow: true });
    },
    [tags, router]
  );

  const toggleTag = useCallback(
    (tag: string) => {
      let q = '?';
      let newTags = tags.map((t) => decodeURIComponent(t));

      if (newTags.includes(tag)) {
        newTags = newTags.filter((t) => t !== tag);
      } else {
        newTags = [...tags, tag];
      }

      const tagFilter = newTags.map((t) => encodeURIComponent(t)).join('&t=');

      if (year !== new Date().getFullYear()) {
        q += `y=${year}`;
      }

      if (Boolean(newTags.length)) {
        q += `&t=${tagFilter}`;
      }

      if (q.trim() === '?') {
        q = '';
      }

      router.replace(`${router.pathname}${q}`, undefined, { shallow: true });
    },
    [tags, year, router]
  );

  const clearTags = useCallback(() => {
    let q = '?';

    if (year !== new Date().getFullYear()) {
      q += `y=${year}`;
    }

    if (q.trim() === '?') {
      q = '';
    }

    router.replace(`${router.pathname}${q}`, undefined, { shallow: true });
  }, [year, router]);

  const checkPost = useCallback(
    (post: ArticleItem) => {
      let validTags = true;

      if (Boolean(tags.length)) {
        let tagsCount = 0;

        tags.forEach((tag) => {
          if (post.tags.some((t) => t === tag)) {
            tagsCount++;
          }
        });

        validTags = tagsCount === tags.length;
      }

      return post.year === year && validTags;
    },
    [tags, year]
  );

  return {
    year,
    tags,
    hasTags: Boolean(tags.length),
    toggleTag,
    clearTags,
    setYear,
    checkPost,
  };
}
