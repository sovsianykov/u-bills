import React, { Component } from "react";
import Year from "./Components/Year/Year";
import Container from "react-bootstrap/Container";
import Layout from "./Components/Layout/layout";
class App extends Component {
  render() {
    return (
      <Container fluid={true} >
        <Layout>
          <h1>my U-Bills</h1>
          <Year />
        </Layout>
      </Container>
    );
  }
}

export default App;
