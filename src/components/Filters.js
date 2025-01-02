import React, { useState, useEffect } from 'react';
import './Dashboard.css'; 
const Filters = ({ devices, setFilteredDevices }) => {
  const [selectedStorage, setSelectedStorage] = useState(0);
  const [selectedRam, setSelectedRam] = useState([]);
  const [selectedHdd, setSelectedHdd] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const ramOptions = ['2GB', '4GB', '8GB', '12GB', '16GB', '24GB', '32GB', '48GB', '64GB', '96GB'];
  const hddOptions = ['SAS', 'SATA', 'SSD'];
  const locations = [...new Set(devices.map(device => device.Location))];
  const handleStorageChange = (event) => setSelectedStorage(Number(event.target.value));
  const handleRamChange = (event) => {
    const { value, checked } = event.target;
    setSelectedRam(prev => checked ? [...prev, value] : prev.filter(ram => ram !== value));
  };
  const handleHddChange = (event) => setSelectedHdd(event.target.value);
  const handleLocationChange = (event) => setSelectedLocation(event.target.value);

  const getStorageSizeInGB = (hddValue) => {
    const match = hddValue.match(/(\d+)x(\d+)TB/); 
    if (match) {
      const quantity = parseInt(match[1], 10);
      const sizePerUnit = parseInt(match[2], 10);
      return quantity * sizePerUnit * 1000; 
    }
    return 0; 
  };

  useEffect(() => {
    let filteredDevices = devices;

    if (selectedStorage > 0) {
      filteredDevices = filteredDevices.filter(device => {
        const storageSize = getStorageSizeInGB(device.HDD); 
        console.log(`Device: ${device.HDD}, Extracted Storage: ${storageSize}, Selected Storage: ${selectedStorage}`);
        return storageSize >= selectedStorage; 
      });
    }

    if (selectedRam.length > 0) {
      filteredDevices = filteredDevices.filter(device =>
        selectedRam.some(ram => device.RAM.includes(ram))
      );
    }

    if (selectedHdd) {
      filteredDevices = filteredDevices.filter(device => device.HDD.includes(selectedHdd));
    }

    if (selectedLocation) {
      filteredDevices = filteredDevices.filter(device => device.Location === selectedLocation);
    }

    setFilteredDevices(filteredDevices);
  }, [selectedStorage, selectedRam, selectedHdd, selectedLocation, devices, setFilteredDevices]);

  return (
    <div className="filter-container">
<div className="filter-item">
  <label>Storage (TB)</label>
  <input
    type="range"
    min="0"
    max="72" 
    value={selectedStorage / 1024} 
    onChange={(e) => setSelectedStorage(Number(e.target.value) * 1024)} 
    step="0"
    className="filter-slider"
  />
  <span>{selectedStorage / 1024} TB</span> 
  
</div>


      <div className="filter-item">
        <label>RAM</label>
        {ramOptions.map(option => (
          <label key={option}>
            <input
              type="checkbox"
              value={option}
              onChange={handleRamChange}
            />
            {option}
          </label>
        ))}
      </div>

      <div className="filter-item">
        <label>Harddisk Type</label>
        <select value={selectedHdd} onChange={handleHddChange} className="filter-dropdown">
          <option value="">Select HDD Type</option>
          {hddOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Location</label>
        <select value={selectedLocation} onChange={handleLocationChange} className="filter-dropdown">
          <option value="">Select Location</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
