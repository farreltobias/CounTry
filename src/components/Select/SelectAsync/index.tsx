import { Option } from '..'
import { buildControl } from '../buildControl'
import { buildMultiValueLabel } from '../buildMultiValue'
import { buildOption } from '../buildOption'
import { StyledSelect } from './styles'

type Props = {
  defaultOptions?: Option[]
  loadOptions: (inputOption: string) => Promise<Option[]>
  value: Option | Option[] | null
  setValue: (value: any) => void
  label: string
  icon: React.ReactNode
  placeholder?: string
  isMulti?: boolean
  isSearchable?: boolean
  disabled?: boolean
  error?: string
  disableMoreInputs?: boolean
}

export const SelectAsync: React.FC<Props> = ({
  defaultOptions,
  loadOptions,
  value,
  setValue,
  label,
  icon,
  placeholder = 'Select...',
  isMulti = false,
  disabled = false,
  error,
  disableMoreInputs,
}) => {
  const Control = buildControl({ icon, label, error })
  const MultiValueLabel = buildMultiValueLabel()
  const Option = buildOption()

  return (
    <>
      <StyledSelect
        $error={!!error}
        isMulti={isMulti}
        loadOptions={loadOptions}
        defaultOptions={defaultOptions}
        isClearable={false}
        components={{ Control, MultiValueLabel, Option }}
        classNamePrefix="select"
        value={value}
        onChange={setValue}
        isDisabled={disabled}
        placeholder={placeholder}
        isOptionDisabled={() => disableMoreInputs || false}
        isSearchable={!disableMoreInputs}
        openMenuOnFocus={true}
      />
    </>
  )
}
