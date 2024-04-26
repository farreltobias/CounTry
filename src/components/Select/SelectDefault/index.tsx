import { StyledSelect } from './styles'
import { buildControl } from '../buildControl'
import { buildMultiValueLabel } from '../buildMultiValue'
import { Option } from '..'

type Props = {
  options: Option[]
  value: Option | Option[] | null
  setValue: React.Dispatch<React.SetStateAction<any>>
  label: string
  icon: React.ReactNode
  placeholder?: string
  isMulti?: boolean
  isSearchable?: boolean
  disabled?: boolean
  error?: string
}

export const SelectDefault: React.FC<Props> = ({
  options,
  value,
  setValue,
  label,
  icon,
  placeholder = 'Select...',
  isMulti = false,
  isSearchable = false,
  disabled = false,
  error,
}) => {
  const Control = buildControl({ icon, label, error })
  const MultiValueLabel = buildMultiValueLabel()

  return (
    <>
      <StyledSelect
        $error={!!error}
        isMulti={isMulti}
        options={options}
        isSearchable={isSearchable}
        isClearable={false}
        components={{ Control, MultiValueLabel }}
        classNamePrefix="select"
        value={value}
        onChange={(value) => setValue(value)}
        isDisabled={disabled}
        placeholder={placeholder}
        openMenuOnFocus={true}
      />
    </>
  )
}
