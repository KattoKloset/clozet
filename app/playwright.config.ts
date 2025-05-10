import { PlaywrightTestConfig, devices } from '@playwright/test'

const baseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL || 'http://localhost:3000'
console.log(`ℹ️ Using base URL "${baseUrl}"`)

const opts = {
  // launch headless on CI, in browser locally
  headless: !!process.env.CI || !!process.env.PLAYWRIGHT_HEADLESS,
  // collectCoverage: !!process.env.PLAYWRIGHT_HEADLESS
}
const config: PlaywrightTestConfig = {
  /* Run tests in files in parallel */
  fullyParallel: true,
  testDir: './test',
  use: {
    ...devices['Headless Chrome'],
    baseURL: baseUrl,
    headless: opts.headless,
  },
  retries: 2,
}

export default config
