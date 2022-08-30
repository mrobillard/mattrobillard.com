import { ReactNode } from 'react';

export type MarkdownParagraphProps = {
  children?: ReactNode;
};

const MarkdownParagraph: React.FC<MarkdownParagraphProps> = ({ children }) => (
  <p className="font-barlow font-normal not-italic text-[1.4rem] leading-[2rem] tracking-[0.05em] text-prussian-blue">
    {children}
  </p>
);

export default MarkdownParagraph;
