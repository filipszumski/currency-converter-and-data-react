import React from 'react';
import { Header } from "./Header";
import { Form } from "./Form";
import { Clock } from "./Clock";
import "./style.css";
import {GlobalStyle} from "./GlobalStyle";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Clock />
      <Header />
      <Form />
    </div>
  );
}

export default App;
