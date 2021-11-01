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
  width: 190px;
  height: 50px;
  padding: 15px 32px;
  border-width: 0px;
  background: rgb(85,169,133);
  display: flex;
  justify-content: center;
  color: #ffffff;
  font-weigth: bold;
  align-items: center;

  &:hover {
    background: rgb(96,190,150)
  }

  &:focus {
    background: rgb(63,141,108);
  }

  &:disabled {
    background: rgb(201, 201, 201)
  }
`;

export default observer(DeleteButton)