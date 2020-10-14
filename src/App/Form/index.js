import React, { useState } from "react";
import { Result } from "./Result";
import { StyledForm, Paragraph, Label, Input, Button, Span } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {
  const [rates, date, state] = useRatesData();
  const [possessedCurrency, setPossessedCurrency] = useState("PLN");
  const [wantedCurrency, setWantedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = () => {
    const possessedCurrencyRate = rates[possessedCurrency];
    const wantedCurrencyRate = rates[wantedCurrency];

    setResult({
      amountPossessed: +amount,
      amountRecived: amount * wantedCurrencyRate / possessedCurrencyRate,
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
      {state === "loading" ?
        (
          <>
            <Paragraph loadingState>
              Trwa pobieranie kursów walut z &nbsp;<strong>Europejskiego Banku Centralnego...<span role="img" aria-label="smiling face with sunglasses">&#128526;</span></strong>
            </Paragraph>
          </>
        )
        : state === "failure" ?
          (
            <>
              <Paragraph errorState>
                Upps...Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem.&nbsp;
            Jeśli masz, to wygląda na to, że to nasz wina. Może spróbuj później ? <span role="img" aria-label="smiling face with smiling eyes">&#128522;</span>
              </Paragraph>
            </>
          )
          : state === "success" && (
            <>
              <Paragraph>
                <Label>
                  <Span className="form__labelText">Wymieniasz z (wybierz walutę):</Span>
                  <Input
                    as="select"
                    placeholder="Wybierz walutę..."
                    value={possessedCurrency}
                    onChange={event => setPossessedCurrency(event.target.value)}
                  >
                    {Object.keys(rates).map(currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
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
                    min="0"
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
                    value={wantedCurrency}
                    onChange={event => setWantedCurrency(event.target.value)}
                  >
                    {Object.keys(rates).map(currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    ))}
                  </Input>
                </Label>
              </Paragraph>

              <Paragraph>
                <Button>Przelicz</Button>
              </Paragraph>
              <Paragraph info>
              Kursy walut pobierane są z Europejskiego Banku Centralnego.<br/>
              Aktualne na dzień: {date}
          </Paragraph>
              <Result result={result} />
            </>
          )}
    </StyledForm>
  );
};

export { Form };