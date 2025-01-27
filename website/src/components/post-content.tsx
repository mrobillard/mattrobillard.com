import { PortableText } from '@portabletext/react';

import { Code } from './code';
import type { Post } from '@server/types';

export function PostContent({ post }: { post: Post}) {
  return (
    <div className="prose prose-h2:font-light prose-h2:font-serif prose-h2:my-0 prose-code:after:hidden prose-code:before:hidden mx-auto w-full max-w-screen-sm pb-8">
      <PortableText
        value={post.body}
        components={{
         block: {
          h2: ({ children }) => (
            <div className="mb-[0.8em] mt-[1.6em] flex w-full flex-col items-start gap-2">
              <h2>{children}</h2>
              <hr className="border-navy my-0 w-full" />
            </div>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-navy relative mx-auto max-w-lg border-l py-4 pl-8 font-serif font-light italic">
              <span className="bg-navy pointer-events-none absolute bottom-0 left-0 h-px w-4" />
              <span className="bg-navy pointer-events-none absolute left-0 top-0 h-px w-4" />
              {children}
            </blockquote>
          ),
         }, 

          types: {
            code: (props) => (
              <Code language={props.value.language}>{props.value.code}</Code>
            ),
          },
        }}
      />
    </div>
  );
}
