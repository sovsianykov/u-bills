import React from "react";
import Aoux from "../../Houk/Aoux";

const Month = ({ current }) => (
  <Aoux>
    <tr className="currentM">
      <th className="cell">{current.name} </th>
      <td className="cell pay">{current.elPay}  </td>
      <td className="cell">{current.elDebt} </td>
      <td className="cell">{current.elDate}</td>
      <td className="cell">{current.elValue}</td>
      <td className="cell pay">{current.watterPay} </td>
      <td className="cell">{current.watterDebt}</td>
      <td className="cell">{current.watterDate}</td>
      <td className="cell">{current.watterValue}</td>
      <td className="cell pay">{current.adminPay} </td>
      <td className="cell">{current.adminDebt}</td>
      <td className="cell">{current.hotWatterValue}</td>
      <td className="cell">{current.adminDate}</td>
      <td className="cell pay">{current.total} </td>
    </tr>
  </Aoux>
);

export default Month;
