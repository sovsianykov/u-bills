import React, { Component } from "react";
import Aux from "../../Houk/Aoux";
import Table from "react-bootstrap/Table";
import InputTemplate from "../InputTempate/Inputemplate";
import "./Year.css";
import Month from "../Month/Month";
import MonthItems from "../MonthItems/MonthItems";
import Button from "react-bootstrap/Button"

class Year extends Component {
  state = {
    months: [
      // {
      //   id: 0,
      //   completed: "false",
      //   name: "Jan",
      //   elPay: "0",
      //   elDebt: "0 ",
      //   elValue: "0 ",
      //   elDate: "0 ",
      //   watterPay: "0",
      //   watterDebt: "0 ",
      //   watterValue: "0 ",
      //   watterDate: "0 ",
      //   adminPay: "0",
      //   adminDebt: "0 ",
      //   hotWatterValue: "0 ",
      //   adminDate: "0 ",
      //   totalForMonth: " 0",
      // }
    ],
    current:
      {
        id: Date.now(),
        completed: "false",
        name: "jan",
        elPay: "0",
        elDebt: "0 ",
        elValue: "0 ",
        elDate: "0 ",
        watterPay: "0",
        watterDebt: "0 ",
        watterValue: "0 ",
        watterDate: "0 ",
        adminPay: "0",
        adminDebt: "0 ",
        hotWatterValue: "0 ",
        adminDate: "0 ",
        totalForMonth: " 0",
      }

  };






    saveHandler = () => {
        let temp = [0,0,0,0,0,0,0,0,0,0,0,0,0]
        let inputs = document.querySelectorAll('input')
        let cell = document.querySelectorAll('tr.currentM td, tr.currentM th')
        let item = document.querySelectorAll('tr.item td, tr.item th')
        for ( let j=0; j< 12;j++) {
            inputs[j].style.color = 'brown'
            cell[j].textContent = inputs[j].value
            // item[j].textContent = inputs[j].value

        }
        console.log(cell)

        this.setState({
              current:
                    {
                        id: Date.now(),
                        completed: "false",
                        name: cell[0].textContent,
                        elPay: cell[1].textContent,
                        elDebt: cell[2].textContent,
                        elValue: "0 ",
                        elDate: "0 ",
                        watterPay: "0",
                        watterDebt: "0 ",
                        watterValue: "0 ",
                        watterDate: "0 ",
                        adminPay: "0",
                        adminDebt: "0 ",
                        hotWatterValue: "0 ",
                        adminDate: "0 ",
                        total: " 0",
                    }


            }
        )
      this.state.months.push(this.state.current)
    }




  render() {
    return (
      <Aux>
        <Table bordered hover striped variant="dark" className="Table">
          <thead>
            <tr>
              <th rowSpan="2" colSpan="1">
                months
              </th>
              <th colSpan="4">Electricity</th>
              <th colSpan="4">Water</th>
              <th colSpan="4">Head Of House</th>
            </tr>

            <tr>
              <th colSpan="1">pay</th>
              <th colSpan="1">debt</th>
              <th>date</th>
              <th>value</th>
              <th colSpan="1">pay</th>
              <th colSpan="1">debt</th>
              <th>date</th>
              <th>value</th>
              <th colSpan="1">pay</th>
              <th colSpan="1">debt</th>
              <th>date</th>
              <th>value</th>
            </tr>
          </thead>

          <tbody>
          <MonthItems months={this.state.months}/>
          {/*{this.state.months.map((month, i) => {*/}
          {/*    return <MonthItems  key={i}*/}
          {/*                       months = {this.state.months}*/}
          {/*                       name = {month.name}*/}

          {/*                                      />*/}
          {/*})}*/}
          </tbody>
            <tbody>
            <Month current ={this.state.current}/>
            </tbody>
          <tbody>
            <InputTemplate months={this.state.months}
                           current ={this.state.current}
                           // changed0={this.inpChangeHandler.bind(this)}
                           //
                           // changed1={this.inpChangeHandler.bind(this)}

            />
          </tbody>
        </Table>
          <Button id="save" variant='info' onClick={this.saveHandler.bind(this)}>SAVE THE MONTH</Button>
          {/*<Button id="save" variant='outline-primary' onClick={this.saveforYearHandler.bind(this)}>Complete The Template</Button>*/}

      </Aux>
    );
  }
}

export default Year;
