import React from 'react';
import './Dashboard.css'; 

const TableList = ({ filteredDevices }) => {
  return (
    <div className="table-container">
      <div className="filtered-device-count">
        {filteredDevices.length<486? "Total filter device": "Total  device"}
         <span>{filteredDevices.length}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>RAM</th>
            <th>HDD</th>
            <th>Location</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredDevices.length > 0 ? (
            filteredDevices.map((device, index) => (
              <tr key={index}>
                <td>{device.Model}</td>
                <td>{device.RAM}</td>
                <td>{device.HDD}</td>
                <td>{device.Location}</td>
                <td>{device.Price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No devices match your filter criteria.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
