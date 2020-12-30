import React,{Component} from "react";
import Year from "./Components/Year/Year";
import Container from 'react-bootstrap/Container'
import Layout from "./Components/Layout/layout";
class App  extends Component{
  render() {
    return (
        <Container >
        <h1>my U-Bills</h1>
         <Layout>
         <Year />
         </Layout>
        </Container>


          )
  }
}

export default App;
