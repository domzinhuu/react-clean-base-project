import React, { memo } from 'react'
import Styles from './style.scss'

const Input: React.FC = () => {
  return <footer title='Rodapé' className={Styles.footer}></footer>
}

export default memo(Input)
