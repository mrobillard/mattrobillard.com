import { ReactNode } from 'react';

export type MarkdownBlockquoteProps = {
  children?: ReactNode;
};

const MarkdownBlockquote: React.FC<MarkdownBlockquoteProps> = ({
  children,
}) => <blockquote className="blockquote">{children}</blockquote>;

export default MarkdownBlockquote;
