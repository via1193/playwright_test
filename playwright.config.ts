import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    baseURL: 'https://voila.id/',
    testIdAttribute: 'data-test-id'
  },
};

export default config;