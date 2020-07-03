import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar'
import FinanceDashboard from './Components/FinanceDashboard'
import NetworkDashboard from './Components/NetworkDashboard'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <FinanceDashboard />
    </div>
  );
}

export default App;
