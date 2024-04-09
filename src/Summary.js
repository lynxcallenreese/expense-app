// Summary.js
import React from 'react';

function Summary({ expenses }) {
  const totalSpending = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p className="summary-heading">Total Spending:₹{totalSpending.toFixed(2)}</p>
      {/* You can add more summary information here */}
    </div>
  );
}

export default Summary;
