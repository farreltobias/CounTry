import { TableHeaderContainer } from './styles'

type Props = React.PropsWithChildren<{
  active?: boolean
}>

export const TableHeader: React.FC<Props> = ({ children, active = false }) => {
  return (
    <TableHeaderContainer $active={active}>{children}</TableHeaderContainer>
  )
}
