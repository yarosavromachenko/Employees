import React from 'react';
import Employees from './Employees.js'
import TableHeader from './TableHeader.js'
import styled from 'styled-components';
import DeleteButton from './DeleteButton.js'

const Table = () => {

    return (
        <div>
            <Caption>Таблица пользователей</Caption>
            <StyledTable>
                <TableHeader />
                <Employees />
            </StyledTable>
            <V><DeleteButton /></V>
        </div>
    )
};
const Caption = styled.h2`

display: flex;
flex-direction: column;
border-collapse: collapse;
margin: 2%;

`
const V = styled.div`
width: 100%;
max-width: 46%;
float: right;
`

const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  width 1200px;
  margin: 2%;
`

export default Table;