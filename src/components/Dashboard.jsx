// src/components/Dashboard.js
import React from 'react';
import Budget from './Budget';
import Expenses from './Expenses';
import Investments from './Investments';
import FinancialAnalytics from './FinancialAnalytics';

const Dashboard = () => {
  return (
    <div>
      <h1>Financial Dashboard</h1>

      {/* Placeholder components for different sections */}
      <Budget />
      <Expenses />
      <Investments />
      <FinancialAnalytics />
    </div>
  );
};

export default Dashboard;
