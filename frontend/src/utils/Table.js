import React from 'react';
import Employees from './Employees.js'
import TableHeader from './TableHeader.js'
import DeleteButton from './DeleteButton.js'
import styled from 'styled-components';

const Table = () => {

    return (
        <div>
            <StyledTable>
                <h1>Таблица пользователей</h1>
                <TableHeader />
                <Employees />
                <DeleteButton />
            </StyledTable>
        </div>
    )
};

const StyledTable = styled.table`
display: flex;
flex-direction: column;
`

export default Table;