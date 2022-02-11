import LoginHeader from '@/presentation/components/loginHeader'
import Footer from '@/presentation/components/footer'
import Input from '@/presentation/components/input'
import React from 'react'
import Styles from './style.scss'
import LoadStatus from '@/presentation/components/loading-status'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login:</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>

        <LoadStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
