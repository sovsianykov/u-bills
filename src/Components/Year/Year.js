import React, {Component} from 'react';
import Aoux from '../../Houck/Aoux'
import Table from 'react-bootstrap/Table'
class Year extends Component {
    state = {
        months: [
            {
              id: Date.now + Math.random(),
              completed: "false",
                name : "0",
                elPay: "0",
                elDebt: "0 ",
                elValue:"0 ",
                elDate:"0 ",
              watterPay: "0",
                watterDebt: "0 ",
                watterValue:"0 ",
                watterDate:"0 ",
                adminPay: "0",
                adminDebt: "0 ",
                hotWatterValue:"0 ",
                adminDate:"0 ",
                totalForMonth :0

            }

        ]
    }



 render() {



     return (

        <Aoux>

            <Table bordered hover striped   className='Year'>
                <thead>
                <tr>
                    <th rowSpan="2" colSpan="1">
                        months
                    </th>
                    <th colSpan="4">Electricity</th>
                    <th colSpan="4">Water</th>
                    <th colSpan="4">Head Of House</th>
                </tr>

                <tr>
                    <th colSpan="1">pay</th>
                    <th colSpan="1">debt</th>
                    <th>date</th>
                    <th>value</th>
                    <th colSpan="1">pay</th>
                    <th colSpan="1">debt</th>
                    <th>date</th>
                    <th>value</th>
                    <th colSpan="1">pay</th>
                    <th colSpan="1">debt</th>
                    <th>date</th>
                    <th>value</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th className="monthName">{this.state.months.name}</th>
                    <td>
                        <span>{this.state.months.elPay}</span>
                    </td>
                    <td>
                        <span>{this.state.months.elDebt}</span>
                    </td>
                    <td>
                        <span>{this.state.months.elValue}</span>
                    </td>
                    <td>
                        <span>{this.state.months.elDate}</span>
                    </td>
                    <td>
                        <span>{this.state.months.watterPay}</span>
                    </td>
                    <td>
                        <span>{this.state.months.watterDebt}</span>
                    </td>
                    <td>
                        <span>{this.state.months.watterValue}</span>
                    </td>
                    <td>
                        <span>{this.state.months.watterDate}</span>
                    </td>
                    <td>
                        <span>{this.state.months.adminPay}</span>
                    </td>
                    <td>
                        <span>{this.state.months.adminDebt}</span>
                    </td>
                    <td>
                        <span>{this.state.months.hotWatterValue}</span>
                    </td>
                    <td>
                        <span>{this.state.months.adminDate}</span>
                    </td>
                </tr>
            </tbody>
        </Table>



        </Aoux>


     )
   }

 }

export default Year;
