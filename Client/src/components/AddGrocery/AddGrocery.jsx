import React, { useState } from 'react';
import './AddGrocery.css';

function AddGrocery({ onAdd }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('Other');

  const categories = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Bakery', 'Snacks', 'Beverages', 'Other'];

  const handleAdd = () => {
    if (!name.trim() || !quantity) return;

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      quantity: parseInt(quantity),
      category,
      addedAt: new Date().toLocaleTimeString()
    };

    onAdd(newItem);
    setName('');
    setQuantity('');
    setCategory('Other');
  };

  return (
    <div className="add-grocery">
      <h2 className="add-grocery-title">
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add New Item
      </h2>
      
      <div className="form-group">
        <label>Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="e.g., Apples"
        />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="0"
          min="1"
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <button onClick={handleAdd} className="btn-add">
        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add to List
      </button>
    </div>
  );
}

export default AddGrocery;