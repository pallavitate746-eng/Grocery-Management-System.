import React from 'react';
import './GroceryList.css';

function GroceryList({ groceries, onDelete }) {
  return (
    <div className="grocery-list">
      <h2>Grocery Items</h2>
      <ul>
        {groceries.length === 0 ? (
          <li className="empty">No groceries added yet.</li>
        ) : (
          groceries.map((item, idx) => (
            <li key={idx}>
              <span>{item.name} ({item.quantity})</span>
              <button onClick={() => onDelete(idx)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default GroceryList;
