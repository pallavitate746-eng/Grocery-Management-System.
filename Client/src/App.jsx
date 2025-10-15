import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddGrocery from './components/AddGrocery/AddGrocery';
import GroceryList from './components/GroceryList/GroceryList';
import Summary from './components/Summary/Summary';

function App() {
  const [groceries, setGroceries] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddGrocery = (item) => {
    setGroceries([item, ...groceries]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handleDeleteGrocery = (id) => {
    setGroceries(groceries.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <div className="layout">
          <div className="left-column">
            <AddGrocery onAdd={handleAddGrocery} />
            <Summary groceries={groceries} />
          </div>
          <div className="right-column">
            <GroceryList groceries={groceries} onDelete={handleDeleteGrocery} />
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="success-toast">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Item added successfully!</span>
        </div>
      )}
    </div>
  );
}

export default App;