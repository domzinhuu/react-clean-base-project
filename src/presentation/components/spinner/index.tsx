import React from 'react'
import Styles from './style.scss'

interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {}

const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div {...props} className={[props.className, Styles.spinner].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
