import React, { Component } from "react";
import Aux from "../../Houk/Aoux";
import Table from "react-bootstrap/Table";
import InputTemplate from "../InputTempate/Inputemplate";
import "./Year.css";
import Month from "../Month/Month";
import MonthItems from "../MonthItems/MonthItems";
import Button from "react-bootstrap/Button";

class Year extends Component {
  userData;
  constructor(props) {
    super(props);

    this.state = {
      months: [
        {
          id: 0,
          completed: "false",
          name: "template",
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
          total: " 0",
        },
      ],
      current: {
        id: Date.now(),
        completed: "true",
        name: "",
        elPay: "",
        elDebt: " ",
        elValue: " ",
        elDate: "",
        watterPay: "",
        watterDebt: " ",
        watterValue: " ",
        watterDate: " ",
        adminPay: "",
        adminDebt: " ",
        hotWatterValue: " ",
        adminDate: "",
        total: " ",
      }
    };
  }
  control = "0";
  saveHandler = () => {
    let inputs = document.querySelectorAll("input, select  ");
    let cell = document.querySelectorAll("tr.currentM td, tr.currentM th");

    for (let j = 0; j < 13; j++) {
      inputs[j].style.color = "brown";
      cell[j].textContent = inputs[j].value;
    }

    if (this.control === cell[0].textContent) {
      return;
    }
    this.total = 0;
    this.total +=
      parseInt(cell[1].textContent) +
      parseInt(cell[5].textContent) +
      parseInt(cell[9].textContent);

    this.setState({
      // current: {
      //   id: Date.now(),
      //   completed: "true",
      //   name: cell[0].textContent,
      //   elPay: cell[1].textContent,
      //   elDebt: cell[2].textContent,
      //   elDate: cell[3].textContent,
      //   elValue: cell[4].textContent,
      //   watterPay: cell[5].textContent,
      //   watterDebt: cell[6].textContent,
      //   watterValue: cell[7].textContent,
      //   watterDate: cell[8].textContent,
      //   adminPay: cell[9].textContent,
      //   adminDebt: cell[10].textContent,
      //   hotWatterValue: cell[11].textContent,
      //   adminDate: cell[12].textContent,
      //   total: this.total,
      // },
    });

    this.control = cell[0].textContent;

    this.state.months.push(this.state.current);
  };

  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem("months"));
    this.userData = JSON.parse(localStorage.getItem("current"));

    if (localStorage.getItem("months")) {
      this.setState({
        months: [
          {
            id: this.userData.id,
            completed: this.userData.completed,
            name: this.userData.name,
            elPay: this.userData.elPay,
            elDebt: this.userData.elDebt,
            elValue: this.userData.elValue,
            elDate: this.userData.elDate,
            watterPay: this.userData.watterPay,
            watterDebt: this.userData.watterDebt,
            watterValue: this.userData.watterValue,
            watterDate: this.userData.watterDate,
            adminPay: this.userData.adminPay,
            adminDebt: this.userData.adminDebt,
            hotWatterValue: this.userData.hotWatterValue,
            adminDate: this.userData.adminDate,
            total: this.userData.total,
          }
        ],
        current: {
          id: this.userData.id,
          completed: this.userData.completed,
          name: this.userData.name,
          elPay: this.userData.elPay,
          elDebt: this.userData.elDebt,
          elValue: this.userData.elValue,
          elDate: this.userData.elDate,
          watterPay: this.userData.watterPay,
          watterDebt: this.userData.watterDebt,
          watterValue: this.userData.watterValue,
          watterDate: this.userData.watterDate,
          adminPay: this.userData.adminPay,
          adminDebt: this.userData.adminDebt,
          hotWatterValue: this.userData.hotWatterValue,
          adminDate: this.userData.adminDate,
          total: this.userData.total,
        },
      });
    } else {
     this.setState(
         {
           months: [
             {
               id: 0,
               completed: "false",
               name: "template",
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
               total: " 0",
             },
           ],
           current: {
             id: Date.now(),
             completed: "true",
             name: "",
             elPay: "",
             elDebt: " ",
             elValue: " ",
             elDate: "",
             watterPay: "",
             watterDebt: " ",
             watterValue: " ",
             watterDate: " ",
             adminPay: "",
             adminDebt: " ",
             hotWatterValue: " ",
             adminDate: "",
             total: " "
           }
         }
     )
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem("months", JSON.stringify(this.state.months));
    localStorage.setItem("current", JSON.stringify(this.state.current));
  }

  render() {
    return (
      <Aux>
        <Table bordered hover striped className="Table">
          <thead>
            <tr>
              <th rowSpan="2" colSpan="1">
                months
              </th>
              <th colSpan="4">Electricity</th>
              <th colSpan="4">Water</th>
              <th colSpan="4">Head Of House</th>
              <th rowSpan="2">total month payment</th>
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
              <th>value</th>
              <th>date</th>
            </tr>
          </thead>

          <tbody className="mainbody">
            <MonthItems months={this.state.months} />
          </tbody>
          <tbody>
            <Month current={this.state.current} />
          </tbody>
          <tbody>
            <InputTemplate
              months={this.state.months}
              current={this.state.current}
            />
          </tbody>
        </Table>
        <Button
          id="save"
          variant="outline-dark"
          onClick={this.saveHandler.bind(this)}
        >
          SAVE THE MONTH
        </Button>

        {/*<Button id="save local" variant='outline-primary' onClick={this.saveYear.bind(this)}>Save Local</Button>*/}
      </Aux>
    );
  }
}

export default Year;
