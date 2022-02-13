import { useFormContext } from '@/presentation/contexts/form-context'
import React, { memo } from 'react'
import Styles from './style.scss'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { errorState } = useFormContext()
  const error = errorState[props.name]
  const enabledInput = (evt: React.FocusEvent<HTMLInputElement>): void => {
    evt.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }
  return (
    <div role="region" className={Styles.inputWrap}>
      <input role="textbox" {...props} readOnly onFocus={enabledInput} />
      <div title={getTitle()} aria-invalid className={Styles.status}>
        {getStatus()}
      </div>
    </div>
  )
}

export default memo(Input)
