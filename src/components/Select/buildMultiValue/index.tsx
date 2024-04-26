import { components, MultiValueGenericProps } from 'react-select'

import { Option } from '..'

export const buildMultiValueLabel = () => (props: MultiValueGenericProps) => {
  const { image, label } = props.data as Option

  return (
    <components.MultiValueLabel {...props}>
      {image ? <img src={image} alt={label} /> : null}
      {props.children}
    </components.MultiValueLabel>
  )
}
