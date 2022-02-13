import { useFormContext } from '@/presentation/contexts/form-context'
import React from 'react'
import Spinner from '../spinner'
import Styles from './style.scss'

const LoadingStatus: React.FC = () => {
  const { isLoading, errorMessage } = useFormContext()
  return (
    <div role="error-wrapper" className={Styles.errorWrap}>
      {isLoading ?? <Spinner className={Styles.spinnerLoad} />}
      {errorMessage ?? <span className={Styles.error}>{errorMessage}</span>}
    </div>
  )
}

export default LoadingStatus
