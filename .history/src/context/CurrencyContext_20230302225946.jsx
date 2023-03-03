import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
  return (
    <div>{childern}</div>
  )
}

export default CurrencyProvider