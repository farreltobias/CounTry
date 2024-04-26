import { type ControlProps, components } from 'react-select'

import { Error, IconContainer, LabelSpan, SelectContainer } from './styles'

type Props = {
  icon: React.ReactNode
  label: string
  error?: string
}

export const buildControl =
  ({ icon, label, error }: Props) =>
  ({ ...props }: ControlProps) => {
    return (
      <SelectContainer>
        <LabelSpan>{label}</LabelSpan>
        {error && <Error>{error}</Error>}
        <components.Control {...props}>
          {icon ? <IconContainer>{icon}</IconContainer> : null}
          {props.children}
        </components.Control>
      </SelectContainer>
    )
  }
