import z from 'zod';

const envSchema = z.object({
  APP_GITHUB_TOKEN: z.string(),
});


export  const env = envSchema.parse(import.meta.env);
