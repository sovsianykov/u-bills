import React from "react";
import Aoux from "../../Houk/Aoux";
import Month from "../Month/Month";
import MonthItems from "../MonthItems/MonthItems";

function InputTemplate(props) {


const inpChangeHandler = (event) => {
   props.setState ({
         current:
           {
             id: 0,
             completed: "false",
             name: "Jan",
             elPay: event.target.value,
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

       }
   )
  console.log(props.current.elPay)
 }


  return (
    <Aoux>

            <Month

                 // key ={props.state.current.id}
                changed0={inpChangeHandler}
                // elPay={el.elPay}
                // elDebt={el.elDebt}
                // elValue={el.elValue}
                // elDate={el.elDate}
                // watterPay={el.watterPay}
                // watterDebt={el.watterDebt}
                // watterValue={el.watterValue}
                // watterDate={el.watterDate}
                // adminPay={el.adminPay}
                // adminDebt={el.adminDebt}
                // adminDate={el.adminDate}
                // hotWatterValue={el.hotWatterValue}
                // totalForMonth={el.totalForMonth}
            />



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
