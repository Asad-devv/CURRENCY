import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <CurrencyContext.provider>{childern}</CurrencyContext.provider>
  )
}

export default CurrencyProvider