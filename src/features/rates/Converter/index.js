import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Result } from "./Result";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { StyledForm, Paragraph, Label, Button, Span } from "./styled";
import { Input } from "../styled";
import { Footer } from "../../../common/Footer";
import {
  getRates,
  selectState,
  selectDate,
  selectRatesNames,
  selectBase
} from "../ratesSlice";

const Converter = () => {
  const dispatch = useDispatch();
  const rates = useSelector(selectRatesNames);
  const state = useSelector(selectState);
  const base = useSelector(selectBase);

  useEffect(() => {
    dispatch(getRates());
  }, [dispatch, base]);

  const inputRef = useRef(null);

  const [possessedCurrency, setPossessedCurrency] = useState(base);
  const [wantedCurrency, setWantedCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = () => {
    const possessedCurrencyRate = rates.find(rate => rate[0] === possessedCurrency)[1];
    const wantedCurrencyRate = rates.find(rate => rate[0] === wantedCurrency)[1];

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
    inputRef.current.focus();
  };

  return (
    <Container>
      <Header title="Kalkulator walut" />
      <StyledForm onSubmit={onFormSubmit}>
        {state === "loading" ?
          (
            <>
              <Paragraph loadingState>
                Trwa pobieranie kursów walut z &nbsp;<strong>Europejskiego Banku Centralnego...<span role="img" aria-label="smiling face with sunglasses">&#128526;</span></strong>
              </Paragraph>
            </>
          )
          : state === "error" ?
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
                    <Span>Wymieniasz z (wybierz walutę):</Span>
                    <Input
                      as="select"
                      value={possessedCurrency}
                      onChange={event => setPossessedCurrency(event.target.value)}
                    >
                      {rates.sort((a, b) => a[0].localeCompare(b[0])).map(currency => (
                        <option
                          key={currency[0]}
                          value={currency[0]}
                        >
                          {currency[0]}
                        </option>
                      ))}
                    </Input>
                  </Label>
                </Paragraph>

                <Paragraph>
                  <Label>
                    <Span>Kwota:</Span>
                    <Input
                      ref={inputRef}
                      type="number"
                      step="0.01"
                      placeholder="Wpisz kwotę..."
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
                      {rates.sort((a, b) => a[0].localeCompare(b[0])).map(currency => (
                        <option
                          key={currency[0]}
                          value={currency[0]}
                        >
                          {currency[0]}
                        </option>
                      ))}
                    </Input>
                  </Label>
                </Paragraph>

                <Paragraph>
                  <Button>Przelicz</Button>
                </Paragraph>
                <Footer />
                <Result result={result} />
              </>
            )}
      </StyledForm>
    </Container>
  );
};

export { Converter };