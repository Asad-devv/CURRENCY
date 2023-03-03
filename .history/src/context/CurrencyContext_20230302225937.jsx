import React from 'react'

export const CurrencyContext = create

const CurrencyProvider = ({childern}) => {
  return (
    <div>{childern}</div>
  )
}

export default CurrencyProvider