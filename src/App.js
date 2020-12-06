import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./common/Navigation";
import { Converter } from "./features/rates/Converter";
import { toConverter } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route path={toConverter()}>
          <Converter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
