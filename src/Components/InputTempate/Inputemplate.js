import React from "react";
import Aoux from "../../Houk/Aoux";
import Month from "../Month/Month";
import MonthItems from "../MonthItems/MonthItems";

function InputTemplate(props) {



  return (
    <Aoux>
      <tr>
        <th className="monthName">
          <input type="text" />
        </th>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text"  />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" />
          </span>
        </td>
      </tr>
      <tr>
        <td className="total" colSpan="13">
          total pay for month <input type="text" />
        </td>
      </tr>
    </Aoux>
  );
}

export default InputTemplate;
