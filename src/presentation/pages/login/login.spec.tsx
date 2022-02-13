import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LoginPage } from '..'

describe('LoginPage', () => {
  test('Deve iniciar a tela com o estado inicial ', () => {
    render(<LoginPage />)

    const loadingStatus = screen.getByRole('error-wrapper')
    expect(loadingStatus.childElementCount).toBe(0)
    expect(screen.getByRole('button', { name: /entrar/i })).toBeDisabled()

    const emailInput = screen.getByRole('textbox', {
      name: /digite seu email/i
    })
    expect(emailInput).toHaveValue('')

    const passwordInput = screen.getByRole('textbox', {
      name: /digite sua senha/i
    })
    expect(passwordInput).toHaveValue('')

    const emailObrigatorio = screen.getByTitle(/campo email obrigatório/i)
    expect(emailObrigatorio).toBeTruthy()

    const passwordObrigatorio = screen.getByTitle(/campo password obrigatório/i)
    expect(passwordObrigatorio).toBeTruthy()
  })
})
