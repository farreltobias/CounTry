import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'src/store'
import { FormLayout } from 'src/layouts/Form'

import { QuizForm } from '.'

describe('Quiz Form', () => {
  it('should render the component with both children', async () => {
    const wrapper = render(
      <QuizForm.Root>
        <QuizForm.Header />
        <QuizForm.List>
          <QuizForm.Question
            number={1}
            question={{
              title: 'Question',
              theme: { label: 'Flag', value: 'flags' },
              alternatives: [
                {
                  label: 'Alternative 1',
                  value: 'alternative-1',
                  correct: true,
                },
                {
                  label: 'Alternative 2',
                  value: 'alternative-2',
                  correct: false,
                },
              ],
              id: '1',
            }}
          />

          <QuizForm.Empty />
        </QuizForm.List>
      </QuizForm.Root>,
      {
        wrapper: ({ children }) => (
          <Provider store={store}>
            <MemoryRouter initialEntries={['/quizzes/new']}>
              <Routes>
                <Route element={<FormLayout />}>
                  <Route path="/quizzes/new" element={children} />
                </Route>
              </Routes>
              <FormLayout />
            </MemoryRouter>
          </Provider>
        ),
      },
    )

    const list = wrapper.getByTestId('quiz-list')
    const title = wrapper.getByText('Question')

    expect(wrapper.container).toBeInTheDocument()
    expect(list.childNodes.length).toBe(2) // 2 alternatives
    expect(title).toBeInTheDocument()
  })
})
