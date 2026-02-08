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
  metadataBase: new URL('https://mattrobillard.com'),
  description: "Matt Robillard's blog",
  title: {
    default: 'Blog',
    template: '%s | Blog',
  },
  keywords: [
    'blog',
    'personal',
    'development',
    'programming',
    'software',
    'engineering',
    'technology',
    'science',
    'security',
  ],
  openGraph: {
    title: 'Matt Robillard',
    description: "Matt Robillard's blog",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matt Robillard',
    description: "Matt Robillard's blog",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://cdn.seline.so/seline.js" />
      </head>
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
