import React   from "react";
import MonthItems from "../MonthItems/MonthItems";
import Aoux from "../../Houk/Aoux";


const Month = ( {current}) =>(

     <Aoux>
         <tr className='currentM' >
              <th >{current.name } </th>
              <td className='cell' >{current.elPay}</td>
              <td className='cell'>{current.elDebt}</td>
              <td className='cell'>{current.elDate}</td>
              <td className='cell'>{current.elValue}</td>
              <td className='cell'>{current.watterPay}</td>
              <td className='cell'>{current.watterDebt}</td>
              <td className='cell'>{current.watterDate}</td>
              <td className='cell'>{current.watterValue}</td>
              <td className='cell'>{current.adminPay}</td>
              <td className='cell'>{current.adminDebt}</td>
              <td className='cell' >{current.hotWatterValue}</td>
              <td className='cell'>{current.adminDate}</td>

         </tr>
     </Aoux>
)


export default Month;
