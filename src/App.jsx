// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Budget from './components/Budget';
import Investments from './components/Investments';
import Reports from './components/Reports';
import Alerts from './components/Alerts';
import FinancialAnalytics from './components/FinancialAnalytics';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/budget">Budget</Link></li>
            <li><Link to="/investments">Investments</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/alerts">Alerts</Link></li>
            <li><Link to="/financial-analytics">Financial Analytics</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/budget" component={Budget} />
          <Route path="/investments" component={Investments} />
          <Route path="/reports" component={Reports} />
          <Route path="/alerts" component={Alerts} />
          <Route path="/financial-analytics" component={FinancialAnalytics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
