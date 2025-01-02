import React from 'react';
import './Dashboard.css'; 
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  console.log("Hi dahsbord")
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to the Dashboard</h2>
      <p className="dashboard-content">Here you can find key metrics and more information!</p>
      <Outlet />
    </div>
  );
}

export default Dashboard;
