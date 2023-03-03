import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <CurrencyContext.Provider>{childern}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider