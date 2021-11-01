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
                        <input
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
                <TH4>Возвраст (лет)</TH4>
                <TH5>Рост</TH5>
                <TH6>Вес</TH6>
                <TH7>Зарплата</TH7>
                <TH8></TH8>
                <TH9></TH9>
            </TR>
        </THead>
    )
}

const THead = styled.thead`
 background: rgb(230, 230, 230);
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
  width: 2%;
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
  width: 10%;
  display: flex;
`
const TH8 = styled.th`
  width: 10%;
  display: flex;
`
const TH9 = styled.th`
  width: 10%;
  display: flex;
`


export default observer(TableHeader)