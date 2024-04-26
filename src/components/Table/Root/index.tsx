import { TableSection } from './styles'

type Props = React.PropsWithChildren<{
  bg?: 'gray-5' | 'transparent'
  active?: boolean
}>

export const TableRoot: React.FC<Props> = ({
  children,
  bg = 'transparent',
  active = false,
}) => {
  return (
    <TableSection $bg={bg} $active={active}>
      {children}
    </TableSection>
  )
}
