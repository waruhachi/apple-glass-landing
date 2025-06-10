
import { describe, expect, it } from 'bun:test';
import { getLandingPage } from '../handlers/get_landing_page';

describe('getLandingPage', () => {
  it('should return static landing page content', async () => {
    const result = await getLandingPage();

    expect(result.title).toEqual('Coming Soon');
    expect(result.message).toEqual('We\'re working on something amazing. Stay tuned!');
    expect(result.background_style).toEqual('grainy-purple');
    expect(result.show_loading).toBe(true);
  });

  it('should return consistent content on multiple calls', async () => {
    const result1 = await getLandingPage();
    const result2 = await getLandingPage();

    expect(result1).toEqual(result2);
  });

  it('should return all required fields', async () => {
    const result = await getLandingPage();

    expect(result).toHaveProperty('title');
    expect(result).toHaveProperty('message');
    expect(result).toHaveProperty('background_style');
    expect(result).toHaveProperty('show_loading');
    expect(typeof result.title).toBe('string');
    expect(typeof result.message).toBe('string');
    expect(typeof result.background_style).toBe('string');
    expect(typeof result.show_loading).toBe('boolean');
  });
});
