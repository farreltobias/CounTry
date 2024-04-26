import { Archery } from 'iconoir-react'

import { Option, Select } from 'src/components/Select'
import { updateQuestion } from 'src/features/form/questionSlice'
import { useFormDispatch, useFormSelector } from 'src/hooks/redux'

const selectOptions = [
  { value: 'flags', label: 'Flag' },
  { value: 'capital', label: 'Capital' },
  { value: 'languages', label: 'Language' },
  { value: 'name', label: 'Country' },
]

export const QuestionThemeSelect: React.FC = () => {
  const dispatch = useFormDispatch()
  const questionInForm = useFormSelector((state) => state.questionInForm)

  const onThemeChange = (theme: Option) => {
    if (theme === questionInForm.theme) return

    if (theme && questionInForm.errors.theme) {
      const { theme: _, ...errors } = questionInForm.errors

      return dispatch(
        updateQuestion({
          theme,
          alternatives: [],
          errors: { ...errors },
        }),
      )
    }

    dispatch(updateQuestion({ theme, alternatives: [] }))
  }

  return (
    <Select.Default
      label="Theme"
      icon={<Archery strokeWidth={2} />}
      options={selectOptions}
      setValue={onThemeChange}
      value={questionInForm.theme}
      placeholder="Select a theme"
      error={questionInForm.errors.theme}
    />
  )
}
