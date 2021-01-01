import React  from "react";

import Aoux from "../../../Houk/Aoux";
const  ArrayOfAllMonths = (props)=>(

    <Aoux>
        <tr>
           <td>
               {props.name}
           </td>
            <td>
            {props.elPay}

        </td>
            <td>
            {props.elDebt}

        </td><td>
               {props.elDate}
           </td><td>
            {props.elValue}

        </td><td>
           </td><td>
               {props.name}
           </td><td>
               {props.name}
           </td><td>
               {props.name}
           </td><td>
               {props.name}
           </td><td>
               {props.name}
           </td><td>
               {props.name}
           </td>

        </tr>
    </Aoux>

)
export default ArrayOfAllMonths;
