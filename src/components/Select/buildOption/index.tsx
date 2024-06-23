import { components, OptionProps } from 'react-select'

import { Option as OptionType } from '..'

const Option = (props: OptionProps) => {
  const { image, label } = props.data as OptionType

  return (
    <components.Option {...props}>
      {image ? <img src={image} alt={label} /> : null}
      {props.children}
    </components.Option>
  )
}

export const buildOption = () => Option
