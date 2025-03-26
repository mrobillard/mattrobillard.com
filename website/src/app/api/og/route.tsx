import { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export const alt = 'Test';

export const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || '';
  const slicedTitle = title.slice(0, 65) + (title.length > 65 ? '...' : '');

  const tiemposHeadline = fetch(
    new URL('./TiemposHeadline.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="flex flex-col items-start h-full w-full px-24 py-16 bg-[#F2F7F7]">
          <div tw="flex w-full justify-end">
            <svg
              width="83"
              height="145"
              viewBox="0 0 83 145"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4947 127.743V80.5342H64.9271L41.2109 104.139"
                stroke="#0B2436"
                strokeWidth="1.74699"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4947 80.5342L64.9271 127.743"
                stroke="#0B2436"
                strokeWidth="1.74699"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M64.9271 64.4657V17.2563L17.4947 64.4657V17.2563L41.2109 40.861"
                stroke="#0B2436"
                strokeWidth="1.74699"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M81.1709 143.923L81.1709 1.08911L1.2451 1.08911L1.2451 143.923H81.1709Z"
                stroke="#0B2436"
                strokeWidth="1.74699"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            tw="font-light text-[#0B2436]"
            style={{
              fontFamily: 'Tiempos Headline',
              fontWeight: 30,
              fontSize: 72,
              maxWidth: 838,
            }}
          >
            {slicedTitle}
          </h1>
          <hr
            style={{
              width: '100%',
              height: 1,
              backgroundColor: '#0B2436',
              marginTop: 32,
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Tiempos Headline',
          data: await tiemposHeadline,
          style: 'normal',
          weight: 300,
        },
      ],
    },
  );
}
