import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Barlow, Roboto_Mono } from 'next/font/google';

const BarlowFont = Barlow({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const RobotoMonoFont = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

const TestTiemposFont = localFont({
  variable: '--font-serif',
  src: [
    {
      path: '../../public/fonts/TiemposHeadline-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TiemposHeadline-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | Blog',
  },
  description: "Matt Robillard's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          BarlowFont.className,
          BarlowFont.variable,
          RobotoMonoFont.variable,
          TestTiemposFont.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
