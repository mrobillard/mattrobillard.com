import SyntaxHighligher from 'react-syntax-highlighter';

const codeFont = {
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.5',
  letterSpacing: '0',
};

const codeStyle: any = {
  'hljs': {
    display: 'block',
    overflowX: 'auto',
    color: 'rgba(219, 179, 120, 1)',
    ...codeFont,
  },
  'hljs-meta': {
    color: '#85B4BE',
    ...codeFont,
  },
  'hljs-title': {
    color: '',
    ...codeFont,
  },
  'hljs-keyword': {
    color: '#DBB378',
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

export function Code({
  language,
  children, 
  ...props
}: {
  language?: string;
  children: string;
}) {
  return (
    <div className="border-navy border px-4 py-4 text-sm">
      <SyntaxHighligher
        language={language}
        style={codeStyle}
        PreTag="div"
        {...props}
      >
        {children}
      </SyntaxHighligher>
    </div>
  );
}
