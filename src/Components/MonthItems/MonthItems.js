import React ,{Component} from "react";

import Aoux from "../../Houk/Aoux";
class MonthItems extends Component {
  render() {
    return (
      <Aoux>
        <tr>
          <th>{this.props.months[this.props.months.length - 1].name}</th>
          <td>{this.props.months[this.props.months.length - 1].elPay}</td>
          <td>{this.props.months[this.props.months.length - 1].elDebt}</td>
          <td>{this.props.months[this.props.months.length - 1].elDate}</td>
          <td>{this.props.months[this.props.months.length - 1].elValue}</td>
          <td>{this.props.months[this.props.months.length - 1].watterPay}</td>
          <td>{this.props.months[this.props.months.length - 1].watterDebt}</td>
          <td>{this.props.months[this.props.months.length - 1].watterDate}</td>
          <td>{this.props.months[this.props.months.length - 1].watterValue}</td>
          <td>{this.props.months[this.props.months.length - 1].adminPay}</td>
          <td>{this.props.months[this.props.months.length - 1].adminDebt}</td>
          <td>{this.props.months[this.props.months.length - 1].adminDate}</td>
          <td>
            {this.props.months[this.props.months.length - 1].hotWatterValue}
          </td>
        </tr>
        <tr>
          <td colSpan="13" className="total">
            total pay for month is
            {this.props.months[this.props.months.length - 1].totalForMonth}
          </td>
        </tr>
      </Aoux>
    );
  }
}


export default MonthItems;
