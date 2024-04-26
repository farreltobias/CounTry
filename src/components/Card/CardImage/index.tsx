import { ImgHTMLAttributes } from 'react'
import { ImageContainer } from './styles'

type Props = {} & ImgHTMLAttributes<HTMLImageElement>

export const CardImage: React.FC<Props> = ({ ...rest }) => {
  return <ImageContainer draggable="false" {...rest} />
}
