import React, {useRef} from 'react';
import employeesStore from './mobx/employeesStore';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components'

const DeleteButton = () => {
    const buttonRef = useRef(null)

    const preventButtonFocus = () => {
        console.log(buttonRef.current)
        buttonRef.current.blur()
    }

    return (
    <DynamicButton disabled={!employeesStore.isAnyEmployeeChecked} ref={buttonRef} onClick={preventButtonFocus}> 
        Удалить выбранные
    </DynamicButton>
)}

const DynamicButton = styled.button`
  width: 200px;
  height: 55px;
  padding: 15px 32px;
  border-width: 0px;
  background: #55A985;
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weigth: bold;
  align-items: center;
  font-size:14px;
  border-radius: 10px;

  &:hover {
    background: #60BE96;
  }

  &:focus {
    background: #55A985;
  }

  &:disabled {
    background: #C9C9C9
  }
`;

export default observer(DeleteButton)