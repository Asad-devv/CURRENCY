import React, { createContext,useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
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
