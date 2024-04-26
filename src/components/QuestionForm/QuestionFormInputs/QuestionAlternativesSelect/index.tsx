import { WhiteFlag } from 'iconoir-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Alternative } from 'src/@types/types'
import {
  getCapitals,
  getFlags,
  getLanguages,
  getNames,
} from 'src/api/restCountries'
import { Card } from 'src/components/Card'
import { Option, Select } from 'src/components/Select'
import { updateQuestion } from 'src/features/form/questionSlice'
import { useFormSelector } from 'src/hooks/redux'

import { AlternativesContainer, CardsList } from './styles'

type Props = React.PropsWithChildren<{}>

export const QuestionAlternativesSelect: React.FC<Props> = () => {
  const dispatch = useDispatch()
  const questionInForm = useFormSelector((state) => state.questionInForm)

  const [defaultOptions, setDefaultOptions] = useState<Option[]>([])

  const isSelectDisabled =
    !questionInForm.theme || questionInForm.alternatives.length >= 4

  const methods: Record<string, (filter?: string) => Promise<Option[]>> = {
    flags: getFlags,
    capital: getCapitals,
    languages: getLanguages,
    name: getNames,
  }

  useEffect(() => {
    const method = methods[questionInForm.theme?.value || '']

    if (!method) {
      return
    }

    method().then((options) => {
      setDefaultOptions(options)
    })
  }, [questionInForm.theme])

  const loadOptions = async (inputOption: string) => {
    const method = methods[questionInForm.theme?.value || '']
    return method(inputOption)
  }

  const selectOneIfNoneIsCorrect = (alternatives: Alternative[]) => {
    if (alternatives.length === 0) {
      return []
    }

    const hasCorrect = alternatives.some((alternative) => alternative.correct)

    if (!hasCorrect) {
      return alternatives.map((alternative, index) => ({
        ...alternative,
        correct: index === 0,
      }))
    }

    return alternatives
  }

  const handleAlternativeChange = (
    values: (Option & { correct?: boolean })[],
  ) => {
    const alternatives: Alternative[] = values.map((value) => ({
      label: value.label,
      value: value.value,
      image: value.image,
      correct: value.correct || false,
    }))

    const alternativesWithCorrect = selectOneIfNoneIsCorrect(alternatives)

    if (
      (values.length >= 2 || values.length <= 4) &&
      questionInForm.errors.alternatives
    ) {
      const { alternatives: _, ...errors } = questionInForm.errors

      return dispatch(
        updateQuestion({
          alternatives: alternativesWithCorrect,
          errors: { ...errors },
        }),
      )
    }

    dispatch(updateQuestion({ alternatives: alternativesWithCorrect }))
  }

  const handleAlternativeCorrectChange = (index: number) => {
    const alternatives = questionInForm.alternatives.map((alternative, i) => ({
      ...alternative,
      correct: i === index,
    }))

    dispatch(updateQuestion({ alternatives }))
  }

  return (
    <>
      <AlternativesContainer>
        <Select.Async
          error={questionInForm.errors.alternatives}
          defaultOptions={defaultOptions}
          isMulti
          label="Alternatives"
          icon={<WhiteFlag />}
          loadOptions={loadOptions}
          value={questionInForm.alternatives}
          setValue={handleAlternativeChange}
          disabled={!questionInForm.theme?.value}
          disableMoreInputs={isSelectDisabled}
          placeholder={
            !questionInForm.theme?.value
              ? 'Please select a theme first'
              : 'Select the alternatives...'
          }
          data-testid="alternatives-select"
        />

        <CardsList>
          {questionInForm.alternatives.map((value, index) => (
            <li key={value.value + value.correct}>
              <Card.Root
                correctAsChecked
                name="alternative"
                checked={value.correct}
                onChange={(e) => {
                  e.preventDefault()
                  handleAlternativeCorrectChange(index)
                }}
              >
                {value.image ? (
                  <Card.Image src={value.image} alt={value.label} />
                ) : (
                  <Card.Text>{value.label}</Card.Text>
                )}
              </Card.Root>
            </li>
          ))}
        </CardsList>
      </AlternativesContainer>
    </>
  )
}
