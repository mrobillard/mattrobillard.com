import { ReactNode } from 'react';

export type MarkdownOrderedListProps = {
  children?: ReactNode;
};

const MarkdownOrderedList: React.FC<MarkdownOrderedListProps> = ({
  children,
}) => <ol className="w-full md:w-[110%] ordered-list">{children}</ol>;

export default MarkdownOrderedList;
