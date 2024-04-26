import { Children, forwardRef } from 'react'
import { separateChildren } from 'src/utils/separate-children'

import { InputIcon } from '../InputIcon'
import { InputLabel } from '../InputLabel'
import { DefaultInput, Error, LabelContainer, TitleInput } from './styles'

type Props = React.PropsWithChildren<{
  variant?: 'default' | 'title'
  error?: string
}> &
  React.InputHTMLAttributes<HTMLInputElement>

const InputRootComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = ({ children, variant = 'default', error, ...rest }, ref) => {
  const withoutIcon = Children.count(children) === 0
  const InputComponent = variant === 'default' ? DefaultInput : TitleInput

  const icons = separateChildren(children, InputIcon.name)
  const labels = separateChildren(children, InputLabel.name)

  return (
    <LabelContainer>
      {labels}
      {error && <Error>{error}</Error>}
      <InputComponent
        ref={ref}
        $error={!!error}
        $withoutIcon={withoutIcon}
        {...rest}
      />
      {icons}
    </LabelContainer>
  )
}

export const InputRoot = forwardRef(InputRootComponent)
