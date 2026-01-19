import { defineConfig } from '@playwright/test';
export default defineConfig({
  // Only run Playwright E2E tests (avoid picking up Jest specs like `*.jest.spec.jsx`)
  testDir: './test/e2e-tests',
  testMatch: '**/*.spec.{js,jsx,ts,tsx}',
  webServer: {
    command: 'pnpm start',
    url: 'http://localhost:3000',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:3000/',
  },
});