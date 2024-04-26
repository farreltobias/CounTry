import { useState } from 'react'
import { LogoContainer, TagContainer } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  size?: 'sm' | 'md' | 'lg'
  asTag?: boolean
  rotate?: boolean
}

const emojis = ['🌎', '🌍', '🌏'] as const

export const Logo: React.FC<Props> = ({
  size = 'md',
  asTag = false,
  rotate = false,
}) => {
  const [emoji, setEmoji] = useState<(typeof emojis)[number]>(emojis[0])
  const Container = asTag ? TagContainer : LogoContainer

  const nextEmoji = emojis[(emojis.indexOf(emoji) + 1) % emojis.length]

  if (rotate) {
    setTimeout(() => {
      setEmoji(nextEmoji)
    }, 500)
  }

  return (
    <Container size={size}>
      <Link to="/" tabIndex={-1}>
        {emoji} Coun<b>Try</b>
      </Link>
    </Container>
  )
}
