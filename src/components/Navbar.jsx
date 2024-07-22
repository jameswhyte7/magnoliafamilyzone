import React from 'react';
import './Main.css';

const Navbar = ({ onFilterChange }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" pills>
    <div className="container-fluid justify-content-center p-0">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-lg-10 d-flex flex-wrap gap-1 justify-content-center justify-content-lg-start p-1">
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('All')}>
            <span className="btn-text">All</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Shoes')}>
            <span className="btn-text">Shoes</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Brandedshoe')}>
            <span className="btn-text">High Quality Branded Shoes</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Stationery')}>
            <span className="btn-text">Stationery</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Backpack')}>
            <span className="btn-text">Backpack & Trolley</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Foodpack')}>
            <span className="btn-text">Food Packs</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Undee')}>
            <span className="btn-text">Under Garments</span>
          </button>
          <button className="nav-link btn btn-gray btn-sm btn-sm-sm" onClick={() => onFilterChange('Jeans')}>
            <span className="btn-text">Jeans</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
