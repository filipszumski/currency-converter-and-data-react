import React from 'react';
import { Header } from "./common/Header";
import { Converter } from "./features/rates/Converter";
import { Clock } from "./common/Clock";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./common/Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Clock />
        <Header />
        <Converter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
