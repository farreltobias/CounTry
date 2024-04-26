import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'
import { TestTube } from 'iconoir-react'
import { MemoryRouter } from 'react-router-dom'

const mockButtonClicked = vi.fn()

describe('Button', () => {
  it('should render the component', async () => {
    const wrapper = render(
      <Button.Root>
        <Button.Icon icon={<TestTube />} /> Button text
      </Button.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })

  it('should display button as anchor', async () => {
    const wrapper = render(
      <Button.Root to="/">
        <Button.Icon icon={<TestTube />} /> Button text
      </Button.Root>,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
        ),
      }
    )

    const link = wrapper.getByRole('link')

    expect(link).toHaveAttribute('href', '/')
  })

  it('should display component as button', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Button.Root onClick={mockButtonClicked}>
        <Button.Icon icon={<TestTube />} /> Button text
      </Button.Root>
    )

    const button = wrapper.getByRole('button')

    await user.click(button)

    expect(button).toBeInTheDocument()
    expect(mockButtonClicked).toHaveBeenCalledTimes(1)
  })
})
