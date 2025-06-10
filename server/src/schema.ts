
import { z } from 'zod';

// Landing page configuration schema
export const landingPageConfigSchema = z.object({
  title: z.string(),
  message: z.string(),
  backgroundColor: z.string(),
  glassOpacity: z.number().min(0).max(1),
  spinnerColor: z.string(),
});

export type LandingPageConfig = z.infer<typeof landingPageConfigSchema>;

// Landing page response schema
export const landingPageResponseSchema = z.object({
  html: z.string(),
  config: landingPageConfigSchema,
});

export type LandingPageResponse = z.infer<typeof landingPageResponseSchema>;
