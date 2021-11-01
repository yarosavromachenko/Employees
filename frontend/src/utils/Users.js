import React, {useEffect} from 'react';
import employeesStore from './mobx/employeesStore';
import { observer } from 'mobx-react-lite';
import TrashIcon from './svg/TrashIcon';
import PencilIcon from './svg/PencilIcon';
import styled from 'styled-components';


const Employees = () => {

    useEffect(() => {
        employeesStore.getEmployees()
    }, [])

    return (
        <TBody>
            {employeesStore.employees.map( (employee) => (
                <TR>
                    <TH1>
                        <label className="container">
                            <input
                                name="All"
                                type="checkbox"
                                onClick={() => employeesStore.toggleCheck(employee.id)}
                                checked={employee.isChecked}
                                value={employee.isChecked}
                            />
                            <span className="checkmark"></span>
                        </label>
                    </TH1>
                    <TH2>{employee.id}</TH2>
                    <TH3>{employee.first_name} {employee.last_name}</TH3>
                    <TH4>{employee.date_of_birth}</TH4>
                    <TH5>{employee.height}</TH5>
                    <TH6>{employee.weight}</TH6>
                    <TH7>{employee.salary}$</TH7>
                    <TH8><PencilIcon /></TH8>
                    <TH9 onClick={() => employeesStore.deleteEmployee(employee.id)}><TrashIcon /></TH9>
                </TR>
            ))
            }
        </TBody>
    )
}

const TBody = styled.tbody`
 width: 100%;
 display: flex;
 flex-direction: column;
 
`

const TR = styled.tr`
  display: flex;
  justify-content: flex-start;
`
const TH1 = styled.th`
  width: 2%;
  display: flex;
`
const TH2 = styled.th`
  width: 10%;
  display: flex;
`
const TH3 = styled.th`
  width: 10%;
  display: flex;
`
const TH4 = styled.th`
  width: 10%;
  display: flex;
`
const TH5 = styled.th`
  width: 10%;
  display: flex;
`
const TH6 = styled.th`
  width: 10%;
  display: flex;
`
const TH7 = styled.th`
  width: 5%;
  display: flex;
`
const TH8 = styled.th`
  width: 5%;
  display: flex;
`
const TH9 = styled.th`
  width: 5%;
  display: flex;
`




export default observer(Employees)