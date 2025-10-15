import React from 'react';
import './GroceryList.css';

function GroceryList({ groceries, onDelete }) {
  const getCategoryClass = (cat) => {
    const classes = {
      'Fruits': 'category-fruits',
      'Vegetables': 'category-vegetables',
      'Dairy': 'category-dairy',
      'Meat': 'category-meat',
      'Bakery': 'category-bakery',
      'Snacks': 'category-snacks',
      'Beverages': 'category-beverages',
      'Other': 'category-other'
    };
    return classes[cat] || classes['Other'];
  };

  return (
    <div className="grocery-list">
      <h2>Your Shopping List</h2>

      {groceries.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="empty-title">No items added yet</p>
          <p className="empty-subtitle">Start adding items to your grocery list</p>
        </div>
      ) : (
        <div className="items-container">
          {groceries.map((item, index) => (
            <div key={item.id} className="grocery-item" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="item-content">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <span className={`category-badge ${getCategoryClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <div className="item-details">
                  <span className="quantity">
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Qty: <strong>{item.quantity}</strong>
                  </span>
                  <span className="time">Added at {item.addedAt}</span>
                </div>
              </div>
              <button onClick={() => onDelete(item.id)} className="btn-delete">
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GroceryList;