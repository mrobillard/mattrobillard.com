import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';

import { useFilter } from '@/hooks/use-filter';
import { ArticleItem } from '@/utils/posts';

const ArticleHeader: React.FC<ArticleItem> = ({
  section,
  title,
  date,
  content,
  tags,
}) => {
  const filter = useFilter();

  const minRead = useMemo(() => {
    const wordsPerMinute = 200;
    const textLength = content.trim().split(/\s+/).length;

    if (textLength > 0) {
      return `${Math.ceil(textLength / wordsPerMinute)} Min Read`;
    }
  }, [content]);

  return (
    <div className="flex flex-col items-center w-full max-w-[32rem] md:max-w-[66.8rem] lg:max-w-[80rem] gap-[5.7rem] md:gap-[8.3rem] pb-[3.2rem]">
      <Link href={`/${section}`} passHref>
        <a className="inline-flex w-full items-center font-barlow font-semibold not-italic text-[1.6rem] leading-[1.2rem] tracking-[0.05em] text-prussian-blue uppercase hover:text-blue-gray active:text-blue-gray transition-all">
          <span style={{ marginInlineEnd: '0.5rem' }}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M3.33334 8H12.6667"
                stroke="currentColor"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
              <path
                d="M8.88889 3.33334L13.5556 8L8.88889 12.6667"
                stroke="currentColor"
                strokeLinecap="square"
              />
            </svg>
          </span>
          {`Back to ${section}`}
        </a>
      </Link>
      <div className="flex flex-col w-full max-w-[29.5rem] md:max-w-[60.8rem] lg:max-w-[64rem] gap-[2.4rem]">
        <div className="flex w-full justify-between items-start pb-[2.4rem] border-b border-prussian-blue">
          <h2 className="max-w-[20rem] md:max-w-[51.8rem] lg:max-w-[55rem] font-tiempos font-light not-italic text-[2.8rem] leading-[3.4rem] tracking-[0.03em] text-prussian-blue">
            {title}
          </h2>
          <div className="flex flex-col w-fit pt-[0.8rem] gap-[0.5rem]">
            <span className="font-barlow font-semibold not-italic text-[1rem] leading-[0.8rem] tracking-[0.1em] text-right text-prussian-blue">
              {date}
            </span>
            <span className="font-barlow font-semibold not-italic text-[1rem] leading-[0.8rem] tracking-[0.1em] text-right text-prussian-blue uppercase">
              {minRead}
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-[0.8rem]">
          {tags.map((tag, i) => (
            <span
              key={`${title}-${date}-${i}-${tag}`}
              className={clsx({
                'inline-flex select-none px-[1.4rem] py-[0.7rem] font-barlow font-semibold not-italic text-[1rem] leading-[1.2rem] tracking-[0.1em] text-prussian-blue uppercase border border-prussian-blue rounded-[0.3rem] transition-all':
                  true,
                'bg-prussian-blue text-white': filter.tags.includes(tag),
              })}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
