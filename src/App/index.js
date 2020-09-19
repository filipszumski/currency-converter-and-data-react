import React from 'react';
import { Header } from "./Header";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { GlobalStyle } from "./GlobalStyle";
import { Wrapper } from "./styled";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Clock />
      <Header />
      <Form />
    </Wrapper>
  );
}

export default App;
