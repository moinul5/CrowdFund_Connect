import React, { useState,useEffect } from "react";
import { CoinContex } from "./CoinContex";


export default function CoinsProvider({children}) {
  const [coin, setCoin] = useState(
    localStorage.getItem("coin") || 0
  )

  useEffect(() => {
    localStorage.setItem("coin", coin);
  }, [coin]);

  return (<CoinContex.Provider value={{ coin, setCoin }}>
    {children}
  </CoinContex.Provider>);
} 