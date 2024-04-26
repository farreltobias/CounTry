import { render } from '@testing-library/react'
import { Card } from '.'

describe('Card', () => {
  it('should render the component with text', async () => {
    const wrapper = render(
      <Card.Root>
        <Card.Text>Card text</Card.Text>
      </Card.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })

  it('should render the component with image', async () => {
    const wrapper = render(
      <Card.Root>
        <Card.Image src="https://via.placeholder.com/250x128" alt="image" />
      </Card.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })

  it('should display correct Card with icon', async () => {
    const wrapper = render(
      <Card.Root correct>
        <Card.Text>Card text</Card.Text>
      </Card.Root>
    )

    const label = wrapper.getByTestId('card-label')

    const check = wrapper.getByTestId('check')
    const minus = wrapper.getByTestId('minus')
    const xmark = wrapper.getByTestId('xmark')

    expect(label).toHaveClass('correct')

    expect(check).toBeVisible()
    expect(minus).not.toBeVisible()
    expect(xmark).not.toBeVisible()
  })

  it('should display incorrect Card with icon', async () => {
    const wrapper = render(
      <Card.Root incorrect>
        <Card.Text>Card text</Card.Text>
      </Card.Root>
    )

    const label = wrapper.getByTestId('card-label')

    const xmark = wrapper.getByTestId('xmark')
    const check = wrapper.getByTestId('check')
    const minus = wrapper.getByTestId('minus')

    expect(label).toHaveClass('incorrect')

    expect(xmark).toBeVisible()
    expect(check).not.toBeVisible()
    expect(minus).not.toBeVisible()
  })
})
