import React, { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";

const Form = () => {
  const [possessedCurrency, setPossessedCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");
  const [wantedCurrency, setWantedCurrency] = useState(currencies[0].name);
  const [result, setResult] = useState();

  const calculateResult = () => {
    const possessedCurrencyRate = currencies.find(currency => currency.name === possessedCurrency).rate;
    const wantedCurrencyRate = currencies.find(currency => currency.name === wantedCurrency).rate;

    setResult({
      amountPossessed: +amount,
      amountRecived: amount * possessedCurrencyRate / wantedCurrencyRate,
      possessedCurrency,
      wantedCurrency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult();
  };

  return (
    <form className="form" action="" method="GET" onSubmit={onFormSubmit}>
      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Wymieniasz z (wybierz walutę):</span>
          <select
            className="form__input"
            value={possessedCurrency}
            onChange={event => setPossessedCurrency(event.target.value)}
          >
            {currencies.map(currency => (
              <option
                name="currency"
                value={currency.name}
                key={currency.short}
              >
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>

      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Kwota:</span>
          <input
            type="number"
            name="amount"
            step="0.01"
            placeholder="Wpisz kwotę"
            className="form__input" min="0"
            required
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
        </label>
      </p>

      <p className="form__paragraph">
        <label className="form__label">
          <span className="form__labelText">Wymieniasz na (wybierz walutę):</span>
          <select
            className="form__input"
            value={wantedCurrency}
            onChange={event => setWantedCurrency(event.target.value)}
          >
            {currencies.map(currency => (
              <option
                name="currency"
                value={currency.name}
                key={currency.short}
              >
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>

      <p className="form__paragraph">
        <button className="form__button">Przelicz</button>
      </p>
      <p className="form__paragraph form__paragraph--info">
        *Wartości kursów walut aktualne na dzień 01.07.2020 r. według danych
        pochodzących ze strony Narodowego Banku Polskiego
      </p>
      <Result result={result} />
    </form>
  );
};

export { Form };