import React, { useState } from "react";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { Table } from "../../../common/Table";
import { Buttons } from "./Buttons";
import { TableBody } from "./TableBody";

const TopRates = () => {
  const [trend, setTrend] = useState("increase");

  return (
    <Container>
      <Header title="Trendy" />
      <Buttons setTrend={setTrend} />
      <Table
        body={<TableBody trend={trend} />}
      />
    </Container>
  );
};

export { TopRates };