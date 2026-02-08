import { forwardRef } from 'react';

export const LogoMark = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    {...props}
    ref={ref}
    fill="none"
    viewBox="0 0 47 83"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.9245 73.1221V46.0989H37.0754L23.5 59.6105"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.9245 46.0989L37.0754 73.1221"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.0754 36.9011V9.87787L9.9245 36.9011V9.87787L23.5 23.3895"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M46.3737 82.3833L46.3737 0.623413L0.623024 0.623413L0.623024 82.3833H46.3737Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

LogoMark.displayName = 'LogoMark';