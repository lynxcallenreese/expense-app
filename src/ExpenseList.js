// ExpenseList.js
import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <p>Amount: {expense.amount}</p>
          <p>Description: {expense.description}</p>
          <p>Category: {expense.category}</p>
          <p>Date: {new Date(expense.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
