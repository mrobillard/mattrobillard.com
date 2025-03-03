import { createClient } from 'next-sanity';

import { env } from '@/env';

export const cms = createClient({
  dataset: env.SANITY_DATASET,
  projectId: env.SANITY_PROJECT_ID,
  apiVersion: env.SANITY_API_VERSION,
});
