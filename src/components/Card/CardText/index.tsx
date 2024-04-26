import { TextContainer } from './styles'

type Props = React.PropsWithChildren<{}>

export const CardText: React.FC<Props> = ({ children }) => {
  return <TextContainer>{children}</TextContainer>
}
