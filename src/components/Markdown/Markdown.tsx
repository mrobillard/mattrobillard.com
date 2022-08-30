import ReactMarkdown from 'react-markdown';

import MarkdownAnchor from './MarkdownAnchor';
import MarkdownBlockquote from './MarkdownBlockquote';
import MarkdownCode from './MarkdownCode';
import MarkdownHeading from './MarkdownHeading';
import MarkdownHR from './MarkdownHR';
import MarkdownImage from './MarkdownImage';
import MarkdownInlineCode from './MarkdownInlineCode';
import MarkdownOrderedList from './MarkdownOrderedList';
import MarkdownParagraph from './MarkdownParagraph';
import { MarkdownProps } from './MarkdownProps';

const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[30rem] md:max-w-[61rem] lg:max-w-[64rem] gap-[2rem]">
      <ReactMarkdown
        components={{
          a: (node) => (
            <MarkdownAnchor href={node.href}>{node.children}</MarkdownAnchor>
          ),
          blockquote: (node) => (
            <MarkdownBlockquote>{node.children}</MarkdownBlockquote>
          ),
          hr: () => <MarkdownHR />,
          ol: (node) => (
            <MarkdownOrderedList>{node.children} </MarkdownOrderedList>
          ),
          img: (node) => <MarkdownImage src={node.src} alt={node.alt} />,
          p: (node) => <MarkdownParagraph>{node.children}</MarkdownParagraph>,
          h2: (node) => <MarkdownHeading>{node.children}</MarkdownHeading>,
          code: ({ inline, className, children }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <MarkdownCode language={match[1]}>
                {String(children).replace(/\n$/, '')}
              </MarkdownCode>
            ) : (
              <MarkdownInlineCode>{children}</MarkdownInlineCode>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
