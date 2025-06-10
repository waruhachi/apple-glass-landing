
import { z } from 'zod';

// Landing page response schema
export const landingPageResponseSchema = z.object({
  title: z.string(),
  message: z.string(),
  background_style: z.string(),
  show_loading: z.boolean()
});

export type LandingPageResponse = z.infer<typeof landingPageResponseSchema>;

export const getLandingPage = async (): Promise<LandingPageResponse> => {
  // Return static landing page content - no database dependency
  return {
    title: 'Coming Soon',
    message: 'We\'re working on something amazing. Stay tuned!',
    background_style: 'grainy-purple',
    show_loading: true
  };
};
