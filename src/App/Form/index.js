import React, { useState } from "react";
import { currencies } from "./currencies";
import { Result } from "./Result";
import { StyledForm, Paragraph, Label, Input, Button, Span } from "./styled";

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
    setAmount("");
  };

  return (
    <StyledForm action="" method="GET" onSubmit={onFormSubmit}>
      <Paragraph>
        <Label>
          <Span className="form__labelText">Wymieniasz z (wybierz walutę):</Span>
          <Input
            as="select"
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
          </Input>
        </Label>
      </Paragraph>

      <Paragraph>
        <Label>
          <Span>Kwota:</Span>
          <Input
            type="number"
            name="amount"
            step="0.01"
            placeholder="Wpisz kwotę"
            className="form__input" min="0"
            required
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
        </Label>
      </Paragraph>

      <Paragraph>
        <Label>
          <Span>Wymieniasz na (wybierz walutę):</Span>
          <Input
            as="select"
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
          </Input>
        </Label>
      </Paragraph>

      <Paragraph>
        <Button>Przelicz</Button>
      </Paragraph>
      <Paragraph info>
        *Wartości kursów walut aktualne na dzień 01.07.2020 r. według danych
        pochodzących ze strony Narodowego Banku Polskiego
      </Paragraph>
      <Result result={result} />
    </StyledForm>
  );
};

export { Form };