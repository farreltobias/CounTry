import { InputHTMLAttributes } from 'react'
import { CardInput, CardLabel, Feedback } from './styles'
import { v4 as uuid } from 'uuid'
import { Check, Minus, Xmark } from 'iconoir-react'

type Props = React.PropsWithChildren<{
  correct?: boolean
  incorrect?: boolean
  correctAsChecked?: boolean
}> &
  InputHTMLAttributes<HTMLInputElement>

export const CardRoot: React.FC<Props> = ({
  children,
  correct = false,
  incorrect = false,
  correctAsChecked = false,
  ...rest
}) => {
  const id = uuid()
  const isAnswered = correct || incorrect || rest.disabled

  const classnames = {
    correct,
    incorrect,
    'correct-as-checked': correctAsChecked,
  }

  const className = Object.entries(classnames)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ')

  return (
    <>
      <CardInput id={id} type="radio" disabled={isAnswered} {...rest} />
      <CardLabel data-testid="card-label" htmlFor={id} className={className}>
        <Feedback data-testid="feedback">
          <div>
            <Minus data-testid="minus" className="minus" />
            <Check data-testid="check" className="check" />
            <Xmark data-testid="xmark" className="cancel" />
          </div>
        </Feedback>
        {children}
      </CardLabel>
    </>
  )
}
