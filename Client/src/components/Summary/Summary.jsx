import React from 'react';
import './Summary.css';

function Summary({ groceries }) {
  const totalItems = groceries.length;
  const totalQuantity = groceries.reduce((sum, item) => sum + item.quantity, 0);
  const categoryCount = [...new Set(groceries.map(item => item.category))].length;

  return (
    <div className="summary">
      <div className="stat-card stat-purple">
        <div className="stat-content">
          <p className="stat-label">Total Items</p>
          <p className="stat-value">{totalItems}</p>
        </div>
        <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>

      <div className="stat-card stat-pink">
        <div className="stat-content">
          <p className="stat-label">Total Quantity</p>
          <p className="stat-value">{totalQuantity}</p>
        </div>
        <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>

      <div className="stat-card stat-indigo">
        <div className="stat-content">
          <p className="stat-label">Categories</p>
          <p className="stat-value">{categoryCount}</p>
        </div>
        <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>
  );
}

export default Summary;