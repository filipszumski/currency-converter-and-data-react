import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Converter } from "./features/rates/Converter";
import { LatestRates } from "./features/rates/LatestRates";
import { TopRates } from "./features/rates/TopRates";
import { Chart } from "./features/rates/Chart";
import { toConverter, toLatestRates, toChart, toTrends, toLatestRatesChart } from "./routes";

// WYPIERDALA EUR Z INPUTA
// ODPOWIEDNI PODZIAŁ NA KOMPONENTY
// UPCHNĄC BASEINPUT JAK NALEZY
// ZRBOIC SORTOWANIE NAZW W BASE INPUT
// ZROBIĆ CHART JAKO JEDEN KOMPONENT NA DWA TYPY DANYCH

function App() {
  return (
    <BrowserRouter basename="/currency-converter-react">
      <Navigation />
      <Switch>
        <Route path={toLatestRatesChart()}>
          <Chart />
        </Route>
        <Route path={toConverter()}>
          <Converter />
        </Route>
        <Route path={toLatestRates()}>
          <LatestRates />
        </Route>
        <Route path={toChart()}>
          <Chart />
        </Route>
        <Route path={toTrends()}>
          <TopRates />
        </Route>
        <Route path="/">
          <Redirect to={toConverter()} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
