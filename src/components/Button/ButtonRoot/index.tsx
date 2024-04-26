import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton, DangerButton } from './styles'

type Props = React.PropsWithChildren<{
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonRoot: React.FC<Props> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  type = 'button',
  ...rest
}) => {
  const Component = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    danger: DangerButton,
  }[variant]

  if (to) {
    return (
      <Component type={type} as={Link} to={to} size={size}>
        {children}
      </Component>
    )
  }

  return (
    <Component type={type} size={size} {...rest}>
      {children}
    </Component>
  )
}
