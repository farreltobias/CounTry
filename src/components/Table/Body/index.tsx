import { TableFlexBody, TableGridBody } from './styles'

type Props = React.PropsWithChildren<{
  display?: 'grid' | 'flex'
}>

export const TableBody: React.FC<Props> = ({ children, display = 'grid' }) => {
  const Component = display === 'grid' ? TableGridBody : TableFlexBody
  return <Component>{children}</Component>
}
