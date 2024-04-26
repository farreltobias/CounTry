import { render } from '@testing-library/react'
import { Input } from '.'
import { TestTube } from 'iconoir-react'

describe('Input', () => {
  it('should render the component with both children', async () => {
    const wrapper = render(
      <Input.Root>
        <Input.Label>Input text</Input.Label>
        <Input.Icon icon={<TestTube />} />
      </Input.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })

  it('should render the component with label', async () => {
    const wrapper = render(
      <Input.Root>
        <Input.Label>Input text</Input.Label>
      </Input.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })
  it('should render the component with icon', async () => {
    const wrapper = render(
      <Input.Root>
        <Input.Icon icon={<TestTube />} />
      </Input.Root>
    )

    expect(wrapper.container).toBeInTheDocument()
  })
  it('should render the component', async () => {
    const wrapper = render(
      <Input.Root />
    )

    expect(wrapper.container).toBeInTheDocument()
  })
})
