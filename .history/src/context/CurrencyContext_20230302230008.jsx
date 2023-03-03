import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <CurrencyContext.provider>{childern}</div>
  )
}

export default CurrencyProvider