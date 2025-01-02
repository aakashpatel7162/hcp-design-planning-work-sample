import React, { useState } from 'react';
import Filters from './Filters';
import './Dashboard.css'; 
import { devices } from '../constant/utils'; 
import TableList from './Tablelist';
const List = () => {
  const [filteredDevices, setFilteredDevices] = useState(devices); 

  return (
    <div className="dashboard-container">
      <Filters devices={devices} setFilteredDevices={setFilteredDevices} />

      <TableList filteredDevices={filteredDevices} />
    </div>
  );
};

export default List;
