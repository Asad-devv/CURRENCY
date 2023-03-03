import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <CurrencyContext.Provider value={value}>{childern}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider