import React from "react";
import Aoux from "../../Houk/Aoux";
const MonthItems = (prtps) => (
  <Aoux>
    <tr>
      <th className="monthName">
        {props.months[props.months.length - 1].name}
      </th>
      <td>
        <span>{props.months[props.months.length - 1].elPay}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].elDebt}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].elValue}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].elDate}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].watterPay}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].watterDebt}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].watterValue}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].watterDate}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].adminPay}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].adminDebt}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].hotWatterValue}</span>
      </td>
      <td>
        <span>{props.months[props.months.length - 1].adminDate}</span>
      </td>
    </tr>
    <tr>
      <td>
        total pay for month{" "}
        {props.months[props.months.length - 1].totalForMonth}{" "}
      </td>
    </tr>
  </Aoux>
);
export default MonthItems;
