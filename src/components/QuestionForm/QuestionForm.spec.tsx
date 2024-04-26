import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from 'src/layouts/Form/store'

import { QuestionForm } from '.'

describe('Question Form', () => {
  it('should render the component with both children', async () => {
    const wrapper = render(
      <QuestionForm.Root>
        <QuestionForm.Header />
        <QuestionForm.Inputs.Root>
          <QuestionForm.Inputs.Title />
          <QuestionForm.Inputs.Theme />
          <QuestionForm.Inputs.Alternatives />
        </QuestionForm.Inputs.Root>
      </QuestionForm.Root>,
      {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      },
    )

    expect(wrapper.container).toBeInTheDocument()
  })
})
