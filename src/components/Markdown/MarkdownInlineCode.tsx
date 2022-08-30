import { ReactNode } from 'react';

export type MarkdownInlineCodeProps = {
  children?: ReactNode;
};

const MarkdownInlineCode: React.FC<MarkdownInlineCodeProps> = ({
  children,
}) => (
  <code className="font-roboto font-medium not-italic text-[1.4rem] leading-[2rem] tracking-[0.05em] text-prussian-blue bg-purple-gray">
    {children}
  </code>
);

export default MarkdownInlineCode;
