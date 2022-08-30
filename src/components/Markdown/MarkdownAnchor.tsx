import { ReactNode } from 'react';

export type MarkdownAnchorProps = {
  href?: string;
  children?: ReactNode;
};

const MarkdownAnchor: React.FC<MarkdownAnchorProps> = ({ href, children }) => (
  <a
    href={href}
    className="font-barlow font-bold not-italic text-[1.4rem] leading-[2rem] tracking-[0.05em] text-blue-gray underline"
  >
    {children}
  </a>
);

export default MarkdownAnchor;
