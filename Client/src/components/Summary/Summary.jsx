import React from 'react';
import './Summary.css';

function Summary({ groceries }) {
  const totalItems = groceries.length;
  const totalQuantity = groceries.reduce((sum, item) => sum + Number(item.quantity), 0);

  return (
    <div className="summary">
      <h2>Summary</h2>
      <p>Total Items: <strong>{totalItems}</strong></p>
      <p>Total Quantity: <strong>{totalQuantity}</strong></p>
    </div>
  );
}

export default Summary;
