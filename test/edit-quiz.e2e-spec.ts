import { expect, test } from '@playwright/test'

test('edit a quiz', async ({ page }) => {
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

  await page.getByTestId('edit-quiz-button').click()

  await page.getByPlaceholder('Name your quiz').fill('Argentina Quiz')
  await page.getByText('Save Changes').click()

  const quizTitle = page.getByText('Argentina Quiz')

  expect(page).toHaveURL(/quizzes/)
  expect(quizTitle).toBeVisible()
})
