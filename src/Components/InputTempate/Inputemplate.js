import React from "react";
import Aoux from "../../Houk/Aoux";

function InputTemplate(props) {
           inpinpChangeHandler0=(event) =>{
             props.setState(
                 months :
             )
           }



  return (
    <Aoux>
      <tr>
        <th>{props.inpChangeHandler0}</th>
        <th>{props.inpChangeHandler1}</th>
        <th>{props.inpChangeHandler2}</th>
        <th>{props.inpChangeHandler3}</th>
        <th>{props.inpChangeHandler4}</th>
        <th>{props.inpChangeHandler5}</th>
        <th>{props.inpChangeHandler6}</th>
        <th>{props.inpChangeHandler7}</th>
        <th>{props.inpChangeHandler8}</th>
        <th>{props.inpChangeHandler9}</th>
        <th>{props.inpChangeHandler10}</th>
        <th>{props.inpChangeHandler11}</th>
        <th>{props.inpChangeHandler12}</th>

      </tr>
      <tr>
        <td colSpan="13" className="total">
          total pay for month is
          {this.props.months[this.props.months.length - 1].totalForMonth}
        </td>
      </tr>


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
