import React, { useEffect, useState } from 'react';
import { shoes, brandedshoes, bags, foodpack, stationery, undee, jeans } from '../assets/Assets';

const Products = ({ category }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const allProducts = [...shoes, ...brandedshoes, ...bags, ...foodpack, ...stationery, ...undee, ...jeans]; // Combine all product arrays if needed
    const filtered = category === 'All'
      ? allProducts
      : allProducts.filter(product => product.category === category);

    setFilteredProducts(filtered);
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top img-fluid product-image rounded-image" alt={product.id} />
              {/* <div className="card-body">
            <p className="card-text">GH₵ {product.price}</p>
          </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
