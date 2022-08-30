import { ReactNode } from 'react';

export type MarkdownHeadingProps = {
  children?: ReactNode;
};

const MarkdownHeading: React.FC<MarkdownHeadingProps> = ({ children }) => (
  <h2
    id={`${children}`}
    className="w-full border-b border-b-prussian-blue font-tiempos font-light not-italic text-[2rem] leading-[1.2rem] tracking-[0.03em] text-prussian-blue pt-[4rem] pb-[1.6rem] mb-[2rem]"
  >
    <a href={`#${children}`}>{children}</a>
  </h2>
);

export default MarkdownHeading;
