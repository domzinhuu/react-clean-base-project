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
        <form
          title="formulário de login"
          name="loginForm"
          className={Styles.form}
        >
          <h2>Login:</h2>
          <Input
            id="login-email"
            type="email"
            name="email"
            title="digite seu email"
            placeholder="Digite seu email"
          />
          <Input
            id="login-password"
            type="password"
            name="password"
            title="digite sua senha"
            placeholder="Digite sua senha"
          />

          <button
            name="login-button"
            disabled
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span
            role="button"
            aria-label="createAccount"
            title="Criar nova conta."
            className={Styles.link}
          >
            Criar conta
          </span>

          <LoadingStatus />
        </form>
      </FormProvider>
      <Footer />
    </div>
  )
}

export default Login
