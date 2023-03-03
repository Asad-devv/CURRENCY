import React, { createContext,useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ childern }) => {
  const [toCurrency, setToCurrency] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const value = {
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {childern}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
