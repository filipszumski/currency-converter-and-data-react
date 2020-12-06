import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Converter } from "./features/rates/Converter";
import { LatestRates } from "./features/rates/LatestRates";
import { toConverter, toLatestRates } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route path={toConverter()}>
          <Converter />
        </Route>
        <Route path={toLatestRates()}>
          <LatestRates />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
