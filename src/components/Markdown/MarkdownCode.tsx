import SyntaxHighlighter from 'react-syntax-highlighter';

const codeFont = {
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: 500,
  fontSize: '1.4rem',
  lineHeight: '2.4rem',
  letterSpacing: '0',
};

const codeStyle: any = {
  'hljs': {
    display: 'block',
    overflowX: 'auto',
    color: 'rgba(219, 179, 120, 1)',
    ...codeFont,
  },
  'hljs-keyword': {
    color: 'rgba(168, 118, 176, 1)',
    ...codeFont,
  },
  'hljs-built_in': {
    color: 'rgba(187, 218, 123, 1)',
    ...codeFont,
  },
  'hljs-type': {
    color: 'rgba(187, 218, 123, 1)',
    ...codeFont,
  },
  'hljs-literal': {
    color: 'rgba(133, 180, 190, 1)',
    ...codeFont,
  },
  'hljs-number': {
    color: 'rgba(133, 180, 190, 1)',
    ...codeFont,
  },
  'hljs-operator': {
    color: 'rgba(133, 180, 190, 1)',
    ...codeFont,
  },
  'hljs-punctuation': {
    color: 'rgba(168, 118, 176, 1)',
    ...codeFont,
  },
  'hljs-property': {
    color: 'rgba(168, 118, 176, 1)',
    ...codeFont,
  },
  'hljs-regex': {
    color: 'rgba(219, 179, 120, 1)',
    ...codeFont,
  },
  'hljs-string': {
    color: 'rgba(168, 118, 176, 1)',
    ...codeFont,
  },
  'hljs-char.scape': {
    color: 'rgba(168, 118, 176, 1)',
    ...codeFont,
  },
  'hljs-subst': {
    color: 'rgba(133, 180, 190, 1)',
    ...codeFont,
  },
  'hljs-variable': {
    color: 'rgba(133, 180, 190, 1)',
    ...codeFont,
  },
  'hljs-comment': {
    color: 'rgba(11, 36, 54, 0.5)',
    ...codeFont,
  },
};

export type MarkdownCodeProps = {
  language?: string;
  children: string;
};

const MarkdownCode: React.FC<MarkdownCodeProps> = ({
  language,
  children,
  ...props
}) => (
  <div className="w-[30rem] my-[3rem] px-[2.4rem] py-[1.6rem] md:px-[3.2rem] md:py-[2.4rem] border border-prussian-blue md:w-[61rem] lg:w-[64rem]">
    <SyntaxHighlighter
      language={language}
      style={codeStyle}
      customStyle={codeStyle}
      PreTag="div"
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  </div>
);

export default MarkdownCode;
