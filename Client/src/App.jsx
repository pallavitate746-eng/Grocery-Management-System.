import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AddGrocery from './components/AddGrocery/AddGrocery';
import GroceryList from './components/GroceryList/GroceryList';
import Summary from './components/Summary/Summary';


function App() {
  const [groceries, setGroceries] = useState([]);

  const handleAddGrocery = (item) => {
    setGroceries([...groceries, item]);
  };

  const handleDeleteGrocery = (idx) => {
    setGroceries(groceries.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddGrocery onAdd={handleAddGrocery} />
        <GroceryList groceries={groceries} onDelete={handleDeleteGrocery} />
        <Summary groceries={groceries} />
      </div>
    </div>
  );
}

export default App
