import React, { useState } from 'react';
import employeesStore from './mobx/employeesStore';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

const TableHeader = () => {

    const [isChecked, setIsChecked] = useState(false)

    const toggleAllEmployeeCheckbox = () => {
        employeesStore.toggleAll(isChecked);
        setIsChecked(!isChecked);
        console.log(isChecked);
    }
    
    return (
      <THead>
          <TR>
              <TH1>
                  <label className="container">
                      <Input
                          name="All"
                          type="checkbox"
                          checked={isChecked}
                          value={isChecked}
                          onClick={toggleAllEmployeeCheckbox}
                      />
                      <span className="checkmark"></span>
                  </label>
              </TH1>
              <TH2>№</TH2>
              <TH3>ФИО</TH3>
              <TH4>Возраст (лет)</TH4>
              <TH5>Рост</TH5>
              <TH6>Вес</TH6>
              <TH7>Зарплата</TH7>
              <TH8></TH8>
              <TH9></TH9>
          </TR>
      </THead>
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

const THead = styled.thead`
  background: rgb(230, 230, 230);
  width: 100%;
  border-radius: 10px 10px 0 0 ;
`

const TR = styled.tr`
  font-size: 110%;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
  border-collapse: collapse;
  border: 3px;
  
`
const TH1 = styled.th`
  width: 5%;
`
const TH2 = styled.th`
  width: 8%;
  display: flex;
`
const TH3 = styled.th`
  width: 20%;
  display: flex;
`
const TH4 = styled.th`
  width: 15%;
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
  width: 27%;
  display: flex;
`
const TH8 = styled.th`
  width: 2%;
  display: flex;
`
const TH9 = styled.th`
  width: 2%;
  display: flex;
`


export default observer(TableHeader)