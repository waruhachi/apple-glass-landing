
import { describe, expect, it } from 'bun:test';
import { updateLandingConfig } from '../handlers/update_landing_config';

describe('updateLandingConfig', () => {
  it('should throw error indicating landing page is now static', async () => {
    await expect(updateLandingConfig()).rejects.toThrow(/static.*cannot.*updated/i);
  });
});
