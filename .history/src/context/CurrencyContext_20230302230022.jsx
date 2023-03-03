import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <CurrencyContext.Provider>{childern}</CurrencyContext.provider>
  )
}

export default CurrencyProvider