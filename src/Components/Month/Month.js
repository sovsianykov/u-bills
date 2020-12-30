import React from "react";
import MonthItems from "../MonthItems/MonthItems";
import Aoux from "../../Houk/Aoux";


const Month = (props) => (
        <Aoux>
            {props.months[0].map((el,i) => {
             return   <MonthItems key ={i}
                                  id ={el.id}

            name = {el.name}
            elPay: "0",
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
            totalForMonth: "0"


             />
            } )}
        </Aoux>
)
export default Month
