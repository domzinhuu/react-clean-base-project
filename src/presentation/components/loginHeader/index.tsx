import React, { memo } from 'react'
import Styles from './style.scss'
import Logo from '../logo'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>Poc teste app reactJS</h1>
    </header>
  )
}

export default memo(LoginHeader)
