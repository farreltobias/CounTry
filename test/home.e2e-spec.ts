import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('The best quiz')).toBeVisible()
  await expect(page.getByText('Welcome to')).toBeVisible()
})
