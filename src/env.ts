import { z } from 'zod';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  server: {
    SITE_METADATA_BASE_URL: z
    .string()
    .min(1, { message: 'SITE_METADATA_BASE_URL must be at least 1 character long' }),
    SANITY_PROJECT_ID: z
    .string()
    .min(1, { message: 'SANITY_PROJECT_ID is required' }),
    SANITY_DATASET: z
    .string()
    .min(1, { message: 'SANITY_DATASET is required' }),
    SANITY_API_VERSION: z
    .string()
    .min(1, { message: 'SANITY_API_VERSION is required' }),
  },
  runtimeEnv: {
    SITE_METADATA_BASE_URL: process.env.SITE_METADATA_BASE_URL,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
  },
});
