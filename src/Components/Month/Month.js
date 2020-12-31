import React from "react";
import MonthItems from "../MonthItems/MonthItems";
import Aoux from "../../Houk/Aoux";


const Month = ({current},props) => {

return (

    <tr id= 'months'>
        <td>{props.current.elPay}</td>
        <td> {props.elPay}</td>
    </tr>
)

}
export default Month;
