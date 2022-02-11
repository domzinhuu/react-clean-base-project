import React, { createContext, useContext, useState } from 'react'

const FormContext: React.Context<any> = createContext({
  isLoading: false
})

export const FormProvider: React.FC = ({ children }): any => {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  return (
    <FormContext.Provider
      value={{ isLoading, setIsLoading, errorMessage, setErrorMessage }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext: any = () => {
  const { isLoading, setIsLoading, errorMessage, setErrorMessage } =
    useContext(FormContext)

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage
  }
}
