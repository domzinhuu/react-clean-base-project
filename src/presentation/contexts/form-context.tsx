import React, { createContext, useContext, useState } from 'react'

const FormContext: React.Context<any> = createContext({})

export const FormProvider: React.FC = ({ children }): any => {
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [errorState] = useState({
    email: 'Campo email obrigatório',
    password: 'Campo password obrigatório'
  })

  return (
    <FormContext.Provider
      value={{
        isLoading,
        setIsLoading,
        errorMessage,
        setErrorMessage,
        errorState
      }}
    >
      {isLoading}
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext: any = () => {
  const { isLoading, setIsLoading, errorMessage, setErrorMessage, errorState } =
    useContext(FormContext)

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
    errorState
  }
}
