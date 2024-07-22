// src/App.js
import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Products from './components/Products';
// import Footer from './components/Footer';

function App() {
  const [filteredCategory, setFilteredCategory] = useState('All');

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
  };

  return (
    <div className="App">
      <Header />
      <Navbar onFilterChange={handleFilterChange} />
      <Products category={filteredCategory} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
