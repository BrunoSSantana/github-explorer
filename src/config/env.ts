import z from 'zod';

const envSchema = z.object({
  APP_GITHUB_TOKEN: z.string(),
  APP_SUPABASE_URL: z.string(),
  APP_SUPABASE_ANON_KEY: z.string(),
});

export  const env = envSchema.parse(import.meta.env);
