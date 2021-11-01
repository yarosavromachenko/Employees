import React from 'react';
import Table from './Table.js'
import { observer } from 'mobx-react-lite'

const App = () => (
  <div>
    <Table /> 
  </div>
);

export default observer(App);