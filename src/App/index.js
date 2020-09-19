import React from 'react';
import { Header } from "./Header";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { GlobalStyle } from "./GlobalStyle";
import { Wrapper } from "./styled";
import { ThemeProvider } from "styled-components";
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Clock />
        <Header />
        <Form />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
