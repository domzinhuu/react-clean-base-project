import React from 'react'
import { render, screen } from '@testing-library/react'
import { LoginPage } from '..'

describe('LoginPage', () => {
  test('Deve iniciar a tela com o estado inicial ', () => {
    render(<LoginPage />)
    const loadingStatus = screen.getByRole('error-wrapper')
    expect(loadingStatus.childElementCount).toBe(0)

    const submitButton: HTMLButtonElement = screen.getByText('Entrar')
    expect(submitButton.disabled).toBe(true)
  })
})
