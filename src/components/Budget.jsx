// src/components/Budget.js
import React, { useState } from 'react';

const Budget = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [newBudgetItem, setNewBudgetItem] = useState('');

  const handleAddBudgetItem = () => {
    setBudgetItems([...budgetItems, newBudgetItem]);
    setNewBudgetItem('');
  };

  return (
    <div>
      <h2>Budget Tracking</h2>

      {/* Form to add new budget item */}
      <div>
        <label htmlFor="newBudgetItem">New Budget Item:</label>
        <input
          type="text"
          id="newBudgetItem"
          value={newBudgetItem}
          onChange={(e) => setNewBudgetItem(e.target.value)}
        />
        <button onClick={handleAddBudgetItem}>Add</button>
      </div>

      {/* Display the list of budget items */}
      <ul>
        {budgetItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Budget;
