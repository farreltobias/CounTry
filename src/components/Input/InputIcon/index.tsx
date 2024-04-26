import { IconContainer } from './styles'

type Props = {
  icon: React.ReactNode
}

export const InputIcon: React.FC<Props> = ({ icon }) => {
  return <IconContainer>{icon}</IconContainer>
}
