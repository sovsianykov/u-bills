import React from "react";
import ArrayOfAllMonths from "./ArrayOfAllMonthes/ArrayOfAllMonths";
import Aoux from "../../Houk/Aoux";
const MonthItems = ({ months }) => (
  <Aoux>
    {months.map((month, i) => {


  return (
      <ArrayOfAllMonths
          key={i}
          month={month}
          name={month.name}
          elPay={month.elPay}
          elDebt={month.elDebt}
          elDate={month.elDate}
          elValue={month.elValue}
          watterPay={month.watterPay}
          watterDebt={month.watterDebt}
          watterDate={month.watterDate}
          watterValue={month.watterValue}
          adminPay={month.adminPay}
          adminDebt={month.adminDebt}
          hotwatterValue={month.hotWatterValue}
          adminDate={month.adminDate}
          totalPay={month.tot}
      />
  );

    })}
  </Aoux>
);

export default MonthItems;
