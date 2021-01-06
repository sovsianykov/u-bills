import React from "react";
import Aoux from "../../Houk/Aoux";

function InputTemplate() {
  return (
    <Aoux>
      <tr>
        <th className="monthName">
          <select name="select">
          <option value="jnv" defaultValue='jnv'>jnv</option>
          <option value="feb" >feb</option>
          <option value="march">march</option>
          <option value="apr">apr</option>
            <option value="may">may</option>
            <option value="jun" >jun</option>
            <option value="jul">jul</option>
            <option value="aou">aou</option>
            <option value="sep">sep</option>
            <option value="oct" >oct</option>
            <option value="nov">nov</option>
            <option value="dec">dec</option>
        </select>
        </th>
        <td>
          <span>
            <input type="text" defaultValue= '0' />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue= '0'  />
          </span>
        </td>
        <td>
          <span>
            <input type="date" defaultValue ='0'  />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0' />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0' />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0'/>
          </span>
        </td>
        <td>
          <span>
            <input type="date" defaultValue ='0' />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0'  />
          </span>
        </td>
        <td>
          <span>
            <input type="text"  defaultValue ='0' />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0' />
          </span>
        </td>
        <td>
          <span>
            <input type="date" />
          </span>
        </td>
        <td>
          <span>
            <input type="text" defaultValue ='0' />
          </span>
        </td>
        <td className="total" >
          <input type="text" defaultValue ='0' />
        </td>
      </tr>

    </Aoux>
  );
}

export default InputTemplate;
