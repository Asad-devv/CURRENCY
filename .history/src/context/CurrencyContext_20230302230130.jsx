import React, { createContext } from 'react'

export const CurrencyContext = createContext()

const CurrencyProvider = ({childern}) => {
    const [toCurrency, setToCurrency] = useState("")
  const [fromCurrency, setFromCurrency] = useState("")
    const value ={
        
    }
  return (
    <CurrencyContext.Provider value={value}>{childern}</CurrencyContext.Provider>
  )
}

export default CurrencyProvider