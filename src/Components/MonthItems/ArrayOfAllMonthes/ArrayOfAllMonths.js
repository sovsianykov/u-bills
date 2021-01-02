import React from "react";

import Aoux from "../../../Houk/Aoux";
const ArrayOfAllMonths = (props) => (
  <Aoux>
    <tr>
      <td>{props.name}</td>
      <td className='pay'>{props.elPay} </td>
      <td>{props.elDebt}</td>
      <td>{props.elDate}</td>
      <td>{props.elValue}</td>
      <td className='pay'>{props.watterPay}</td>
      <td>{props.watterDebt}</td>
      <td>{props.watterDate}</td>
      <td>{props.watterValue}</td>
      <td className='pay'>{props.adminPay}</td>
      <td>{props.adminDebt}</td>
      <td>{props.hotwatterValue}</td>
      <td>{props.adminDate}</td>


      <td className="total pay" colSpan="1">
         {props.total}
      </td>
    </tr>
  </Aoux>
);
export default ArrayOfAllMonths;
