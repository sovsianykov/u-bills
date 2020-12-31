import React, { Component } from "react";
import Aux from "../../Houk/Aoux";
import Table from "react-bootstrap/Table";
import InputTemplate from "../InputTempate/Inputemplate";
import "./Year.css";
import Month from "../Month/Month";
import MonthItem from "../MonthItems/MonthItems";

class Year extends Component {
  state = {
    months: [
      {
        id: 0,
        completed: "false",
        name: "Jan",
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
    ],
    current:
      {
        id: Date.now(),
        completed: "false",
        name: "Jan",
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
          <Month months ={this.state.months} />
          </tbody>
          <tbody>
            {/*<|MonthItem months ={this.state.months} />*/}
            <MonthItem months={this.state.months} />
          </tbody>
          <tbody>
            <InputTemplate months={this.state.months}
                           current ={this.state.current}
            />
          </tbody>
        </Table>
      </Aux>
    );
  }
}

export default Year;
