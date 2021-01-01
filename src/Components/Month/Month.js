import React   from "react";
import MonthItems from "../MonthItems/MonthItems";
import Aoux from "../../Houk/Aoux";


const Month = ( {current}) =>(

     <Aoux>
         <tr className='currentM' >
              <th >{current[0].name } </th>
              <td className='cell' >{current[0].elPay}</td>
              <td className='cell'>{current[0].elDebt}</td>
              <td className='cell'>{current[0].elDate}</td>
              <td className='cell'>{current[0].elValue}</td>
              <td className='cell'>{current[0].watterPay}</td>
              <td className='cell'>{current[0].watterDebt}</td>
              <td className='cell'>{current[0].watterDate}</td>
              <td className='cell'>{current[0].watterValue}</td>
              <td className='cell'>{current[0].adminPay}</td>
              <td className='cell'>{current[0].adminDebt}</td>
              <td className='cell' >{current[0].hotWatterValue}</td>
              <td className='cell'>{current[0].adminDate}</td>

         </tr>
     </Aoux>
)


export default Month;
