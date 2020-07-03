import React from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar'
import FinanceDashboard from './Components/FinanceDashboard'
import NetworkDashboard from './Components/NetworkDashboard'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <NavigationBar />
            <Footer />
          </Route>
          <Route path="/finance">
            <NavigationBar />
            <FinanceDashboard />
            <Footer />
          </Route>
          <Route path="/contact">
            <NavigationBar />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
