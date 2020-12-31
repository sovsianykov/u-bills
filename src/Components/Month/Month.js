import React from "react";
import MonthItems from "../MonthItems/MonthItems";
import Aoux from "../../Houk/Aoux";

const Month = ({ months }) => (
  <Aoux>
    {months.map((el, i) => {
      return (
        <MonthItems
          key={i}
          id={el.id}
          name={el.name}
          elPay={el.elPay}
          elDebt={el.elDebt}
          elValue={el.elValue}
          elDate={el.elDate}
          watterPay={el.watterPay}
          watterDebt={el.watterDebt}
          watterValue={el.watterValue}
          watterDate={el.watterDate}
          adminPay={el.adminPay}
          adminDebt={el.adminDebt}
          adminDate={el.adminDate}
          hotWatterValue={el.hotWatterValue}
          totalForMonth={el.totalForMonth}
        />
      );
    })}
  </Aoux>
);
export default Month;
