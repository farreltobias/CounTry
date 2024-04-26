import { components, OptionProps } from 'react-select'

import { Option } from '../SelectRoot'

export const buildOption = () => (props: OptionProps) => {
  const { image, label } = props.data as Option

  return (
    <components.Option {...props}>
      {image ? <img src={image} alt={label} /> : null}
      {props.children}
    </components.Option>
  )
}
