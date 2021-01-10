import React from "react";
import { Container } from "../../../common/Container";
import { Header } from "../../../common/Header";
import { Table } from "../../../common/Table";
import { TableBody } from "./TableBody";
import { Footer } from "../../../common/Footer";

const LatestRates = () => {

  return (
    <Container>
      <Header title="Ostatnie stawki" />
      <Table
        body={<TableBody />}
      />
      <Footer />
    </Container>
  );
};

export { LatestRates };