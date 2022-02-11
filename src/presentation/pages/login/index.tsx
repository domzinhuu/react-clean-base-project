import {
  Footer,
  Input,
  LoadingStatus,
  LoginHeader
} from '@/presentation/components'
import { FormProvider } from '@/presentation/contexts/form-context'
import React from 'react'
import Styles from './style.scss'

const Login: React.FC = () => {
  return (
    <div role="container" className={Styles.login}>
      <LoginHeader />
      <FormProvider>
        <form className={Styles.form}>
          <h2>Login:</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button className={Styles.submit} type="submit">
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>

          <LoadingStatus />
        </form>
      </FormProvider>
      <Footer />
    </div>
  )
}

export default Login
