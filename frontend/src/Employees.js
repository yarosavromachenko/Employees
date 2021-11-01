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
                            <Input
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

const Input = styled.input`
margin-right: 5px;
cursor: pointer;
font-size: 14px;
width: 20px;
height: 20px;
position: relative;
  
`

const TBody = styled.tbody`
  width: 100%;
`

const TR = styled.tr`
  display: flex;
  padding: 15px;
  :nth-child(2n) {
    background: rgb(247, 247, 247);
  }
`

const TH1 = styled.th`
  width: 5%;
`
const TH2 = styled.th`
  width: 8%;
  display: flex;
  font-weight: normal
`
const TH3 = styled.th`
  width: 20%;
  display: flex;
  font-weight: normal
`
const TH4 = styled.th`
  width: 15%;
  display: flex;
  font-weight: normal
`
const TH5 = styled.th`
  width: 10%;
  display: flex;
  font-weight: normal
`
const TH6 = styled.th`
  width: 10%;
  display: flex;
  font-weight: normal
`
const TH7 = styled.th`
  width: 27%;
  display: flex;
  font-weight: normal
`
const TH8 = styled.th`
  width: 2%;
  display: flex;
`
const TH9 = styled.th`
  width: 2%;
  display: flex;
  
`



export default observer(Employees)