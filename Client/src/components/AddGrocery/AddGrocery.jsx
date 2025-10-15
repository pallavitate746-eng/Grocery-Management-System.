import React, { useState } from 'react';
import './AddGrocery.css';

function AddGrocery({ onAdd }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    onAdd({ name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <form className="add-grocery" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Grocery Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
        min="1"
      />
      <button type="submit">Add Grocery</button>
    </form>
  );
}

export default AddGrocery;
