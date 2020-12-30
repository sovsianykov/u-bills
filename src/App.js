import React,{Component} from "react";
import Year from "./Components/Year/Year";
import Container from 'react-bootstrap/Container'
class App  extends Component{
  render() {
    return (
        <Container >
        <h1>my U-Bills</h1>
         <Year children={this.props.children}/>

        </Container>


          )
  }
}

export default App;
