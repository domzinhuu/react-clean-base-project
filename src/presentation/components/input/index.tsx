import React, { memo } from 'react'
import Styles from './style.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Footer: React.FC<Props> = (props: Props) => {
  const enabledInput = (evt: React.FocusEvent<HTMLInputElement>): void => {
    evt.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enabledInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default memo(Footer)
