import { IconContainer } from './styles'

type Props = {
  icon: React.ReactNode
}

export const ButtonIcon: React.FC<Props> = ({ icon }) => {
  return <IconContainer>{icon}</IconContainer>
}
