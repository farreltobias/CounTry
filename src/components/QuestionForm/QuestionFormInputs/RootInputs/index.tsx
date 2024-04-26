import { InputsContainer } from './styles'

type Props = React.PropsWithChildren<{}>

export const InputsRoot: React.FC<Props> = ({ children }) => {
  return <InputsContainer>{children}</InputsContainer>
}
