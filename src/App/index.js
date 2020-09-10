import React from 'react';
import { Header } from "./Header";
import { Form } from "./Form";
import { Clock } from "./Clock"
import "./style.css"

function App() {
  return (
    <div className="app">
      <Clock />
      <Header />
      <Form />
    </div>
  );
}

export default App;
