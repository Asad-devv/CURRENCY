import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States");
  const [fromCurrency, setFromCurrency] = useState("🇵🇰 PKR - Pakistan");
  const [amount, setAmount] = useState();
  const value = {
    fromCurrency,
    setFromCurrency,
    setToCurrency,
    toCurrency,
    amount,
    setAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
