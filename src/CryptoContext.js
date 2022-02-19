import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

function CryptoContext({ children }) {
  const [currency, setCurrency] = useState("usd");
  const [symbol, setSybmol] = useState("$");

  useEffect(() => {
    if (currency === "usd") setSybmol("$");
    else if (currency === "eur") setSybmol("€");
    else if (currency === "uah") setSybmol("₴");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
