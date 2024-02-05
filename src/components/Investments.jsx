// src/components/Investments.js
import React, { useState } from 'react';

const Investments = () => {
  const [investmentData, setInvestmentData] = useState([]);
  const [newInvestment, setNewInvestment] = useState('');

  const handleAddInvestment = () => {
    setInvestmentData([...investmentData, newInvestment]);
    setNewInvestment('');
  };

  return (
    <div>
      <h2>Investment Portfolios</h2>

      <div>
        <label htmlFor="newInvestment">New Investment:</label>
        <input
          type="text"
          id="newInvestment"
          value={newInvestment}
          onChange={(e) => setNewInvestment(e.target.value)}
        />
        <button onClick={handleAddInvestment}>Add</button>
      </div>

      <ul>
        {investmentData.map((investment, index) => (
          <li key={index}>{investment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Investments;
