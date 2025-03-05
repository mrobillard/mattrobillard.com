import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { RandomReveal } from '@/components/random-reveal';

export default function NotFoundPage() {
  return (
    <div className="bg-navy flex min-h-screen w-full flex-col items-start">
      <Navbar variant="navy" />
      <main className="text-background flex w-full flex-1 grow items-center justify-center px-4 pb-32 md:px-8 lg:px-12">
        <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12">
          <svg
            fill="none"
            viewBox="0 0 387 117"
            className="h-auto w-80 md:w-96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M193.25 115.26C224.697 115.26 250.19 89.7671 250.19 58.32C250.19 26.8729 224.697 1.38 193.25 1.38C161.802 1.38 136.31 26.8729 136.31 58.32C136.31 89.7671 161.802 115.26 193.25 115.26Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M250.19 1.38L136.31 115.63"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M328.94 1L271.63 58.32H328.94"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M328.939 1V115.63"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M328.57 58.32H385.89"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M293.16 79.8H307.46"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M300.33 79.8V94.15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M350.03 29.66H360.74C362.72 29.66 364.33 28.05 364.33 26.07C364.33 24.09 362.72 22.48 360.74 22.48H350.03V36.83"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M58.32 1L1 58.32H58.32"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M58.3203 1V115.63"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M57.9404 58.32H115.26"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.4805 79.8V94.15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.8301 94.15V79.8"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.4805 86.98H36.7905"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M79.4502 22.48H93.7502"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M86.6201 22.48V36.83"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-center font-mono text-xl font-medium tracking-widest">
            <RandomReveal>You are lost</RandomReveal>
          </h1>
        </section>
      </main>
      <Footer variant="navy" />
    </div>
  );
}
