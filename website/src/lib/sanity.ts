import { createClient } from 'next-sanity';

export const cms = createClient({
  dataset: 'production',
  projectId: 'fy49p1qt',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
});
