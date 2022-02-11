import React from 'react'
import Spinner from '../spinner'
import Styles from './style.scss'

const LoadingStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinnerLoad} />
      <span className={Styles.error}>Error</span>
    </div>
  )
}

export default LoadingStatus