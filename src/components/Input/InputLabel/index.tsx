import { LabelContainer } from './styles'

type Props = React.PropsWithChildren<{}>

export const InputLabel: React.FC<Props> = ({ children }) => {
  return <LabelContainer>{children}</LabelContainer>
}
