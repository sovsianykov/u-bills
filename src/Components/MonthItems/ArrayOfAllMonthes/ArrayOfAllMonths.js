import React from "react";

import Aoux from "../../../Houk/Aoux";
const ArrayOfAllMonths = (props) => (
  <Aoux>
    <tr>
      <td>{props.name}</td>
      <td>{props.elPay}</td>
      <td>{props.elDebt}</td>
      <td>{props.elDate}</td>
      <td>{props.elValue}</td>
      <td>{props.watterPay}</td>
      <td>{props.watterDebt}</td>
      <td>{props.watterDate}</td>
      <td>{props.watterValue}</td>
      <td>{props.adminPay}</td>
      <td>{props.adminDebt}</td>
      <td>{props.hotwatterValue}</td>
      <td>{props.adminDate}</td>
    </tr>
    <tr>
      <td className="total" colSpan="13">
        total pay for month {props.total}
      </td>
    </tr>
  </Aoux>
);
export default ArrayOfAllMonths;
