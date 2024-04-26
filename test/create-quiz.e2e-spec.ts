import { expect, test } from '@playwright/test'

test('create new question', async ({ page }) => {
  await page.goto('/quizzes/new', { waitUntil: 'networkidle' })

  await page.getByLabel('Question').fill('What is the flag of Brazil?')

  await page.getByLabel('ThemeSelect a theme').fill('Brazil')
  await page.keyboard.press('Enter')

  await page.getByLabel('Alternatives').fill('Argentina')
  await page.getByRole('option', { name: 'Argentina' }).click()

  await page.getByLabel('Alternatives').fill('Brazil')
  await page.getByRole('option', { name: 'Brazil' }).click()

  await page.getByRole('list').getByRole('img', { name: 'Brazil' }).click()

  await page.getByText('Create Question').click()

  const container = page.getByText('1. What is the flag of Brazil?')
  const brazilCheck = page.getByTestId('check').nth(1)

  expect(container).toBeVisible()
  expect(brazilCheck).toHaveCSS('opacity', '1')
})

test('edit a question', async ({ page }) => {
  await page.goto('/quizzes/new', { waitUntil: 'networkidle' })

  await page.getByLabel('Question').fill('What is the flag of Brazil?')

  await page.getByLabel('ThemeSelect a theme').fill('Brazil')
  await page.keyboard.press('Enter')

  await page.getByLabel('Alternatives').fill('Argentina')
  await page.getByRole('option', { name: 'Argentina' }).click()

  await page.getByLabel('Alternatives').fill('Brazil')
  await page.getByRole('option', { name: 'Brazil' }).click()

  await page.getByRole('list').getByRole('img', { name: 'Brazil' }).click()

  await page.getByText('Create Question').click()

  await page.getByTestId('edit-question-button').click()

  await page.getByLabel('Question').fill('What is the flag of Argentina?')
  await page.getByRole('list').getByRole('img', { name: 'Argentina' }).click()

  await page.getByText('Update Question').click()

  const container = page.getByText('1. What is the flag of Argentina?')
  const argentinaCheck = page.getByTestId('check').first()

  expect(container).toBeVisible()
  expect(argentinaCheck).toHaveCSS('opacity', '1')
})

test('create new quiz', async ({ page }) => {
  await page.goto('/quizzes/new', { waitUntil: 'networkidle' })

  await page.getByLabel('Question').fill('What is the flag of Brazil?')

  await page.getByLabel('ThemeSelect a theme').fill('Brazil')
  await page.keyboard.press('Enter')

  await page.getByLabel('Alternatives').fill('Argentina')
  await page.getByRole('option', { name: 'Argentina' }).click()

  await page.getByLabel('Alternatives').fill('Brazil')
  await page.getByRole('option', { name: 'Brazil' }).click()

  await page.getByRole('list').getByRole('img', { name: 'Brazil' }).click()

  await page.getByText('Create Question').click()

  await page.getByPlaceholder('Name your quiz').fill('Brazil Quiz')

  await page.getByText('Create Quiz').click()

  const quizTitle = page.getByText('Brazil Quiz')

  expect(page).toHaveURL(/quizzes/)
  expect(quizTitle).toBeVisible()
})
