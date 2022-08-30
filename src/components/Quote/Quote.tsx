import { QuoteItem } from '@/utils/posts';

const Quote: React.FC<QuoteItem> = ({ content, author }) => (
  <blockquote className="relative flex items-center w-full max-w-[32rem] md:max-w-[66.8rem] lg:max-w-[80rem] py-[2rem] md:py-[3rem] border-x border-x-prussian-blue mb-[2.4rem] md:mb-[3.6rem]">
    <p className="max-w-[27.3rem] md:max-w-[63.4rem] lg:max-w-[71.4rem] font-tiempos font-light italic text-[1.8rem] leading-[3rem] tracking-[0.05em] pl-[3rem] pr-[1rem]">
      {content}
    </p>
    <span className="absolute top-0 left-0 w-[1.1rem] h-[0.1rem] bg-prussian-blue" />
    <span className="absolute bottom-0 left-0 w-[1.1rem] h-[0.1rem] bg-prussian-blue" />
    <span className="absolute top-0 right-0 w-[1.1rem] h-[0.1rem] bg-prussian-blue" />
    <span className="absolute bottom-0 right-0 w-[1.1rem] h-[0.1rem] bg-prussian-blue" />
    <span className="absolute bottom-[-0.2rem] right-[3rem] font-barlow font-regular not-italic text-[1rem] leading-[1.2rem] tracking-[0.1em] text-right text-prussian-blue">
      {`- ${author}`}
    </span>
  </blockquote>
);

export default Quote;
