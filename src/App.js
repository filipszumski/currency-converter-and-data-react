import React from 'react';
import { Header } from "./common/Header";
import { Converter } from "./features/rates/Converter";
import { Clock } from "./common/Clock";
import { Container } from "./common/Container";

function App() {
  return (
      <Container>
        <Clock />
        <Header />
        <Converter />
      </Container>
  );
}

export default App;
