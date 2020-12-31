import React from "react";
import Aoux from "../../Houk/Aoux";

function InputTemplate(props) {
  return (
    <Aoux>
      <tr>
        <th className="monthName">
          <input type="text" onChange={props.chenged0} />
        </th>
        <td>
          <span>
            <input type="text" onChange={props.chenged1} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged2} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged3} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged4} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged5} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged6} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged7} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged8} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged9} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged10} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged11} />
          </span>
        </td>
        <td>
          <span>
            <input type="text" onChange={props.chenged12} />
          </span>
        </td>
      </tr>
      <tr>
        <td className="total" colSpan="13">
          total pay for month <input type="text" onChange={props.chenged12} />
        </td>
      </tr>
    </Aoux>
  );


}

export default InputTemplate;
