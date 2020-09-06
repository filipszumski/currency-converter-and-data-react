import React, { useState } from 'react';
import { Header } from "./Header";
import { Form } from "./Form";
import { currencies } from "./currencies";
import "./style.css"

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, possessedCurrency, wantedCurrency) => {
    const possessedCurrencyRate = currencies.find(currency => currency.name === possessedCurrency).rate;
    const wantedCurrencyRate = currencies.find(currency => currency.name === wantedCurrency).rate;

    setResult({
      amountPossessed: +amount,
      amountRecived: (+amount * possessedCurrencyRate / wantedCurrencyRate),
      possessedCurrency,
      wantedCurrency,
    });
  };

  return (
    <div className="app">
      <Header />
      <Form
        result={result}
        calculateResule={calculateResult}
      />
    </div>
  );
}

export default App;
