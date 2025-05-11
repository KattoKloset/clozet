import { test, expect } from '@playwright/test'

test.setTimeout(35e3)

test('send message', async ({ browser, page }) => {
  const viewer = await browser.newPage()

  await page.goto('http://localhost:3000/')
  await page.getByRole('button', { name: 'sign in', exact: true }).click()
  await page.getByRole('textbox', { name: 'name' }).click()
  await page.getByRole('textbox', { name: 'name' }).fill('test')
  await page.getByRole('button', { name: 'Sign in with Mocked GitHub' }).click()
  await page
    .locator('div')
    .filter({ hasText: /^Submit$/ })
    .nth(1)
    .click()
  await page.locator('#text').click()
  await page.locator('#text').fill('1qwer$#@!')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.locator('[id="__next"]')).toContainText('1qwer$#@!')
  viewer.close()
})

export {}
