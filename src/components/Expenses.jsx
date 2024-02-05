// src/components/Expenses.js
import React, { useState } from 'react';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    const newExpenseObject = {
      expense: newExpense,
      amount: parseFloat(amount),
    };

    setExpenses([...expenses, newExpenseObject]);
    setNewExpense('');
    setAmount('');
  };

  return (
    <div>
      <h2>Expense Management</h2>

      <div>
        <label htmlFor="newExpense">Expense:</label>
        <input
          type="text"
          id="newExpense"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleAddExpense}>Add Expense</button>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.expense} - ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expenses;
