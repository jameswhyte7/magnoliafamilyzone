import React from 'react';
import { FaPhone, FaInstagram } from 'react-icons/fa';

const Header = () => (
  <header className="bg-primary text-white text-center py-3">
    <div className="header-content d-flex">
      <FaInstagram size="30" className="mr-2" />
      <h1 className="text-center">magnoliafamilyzone</h1>
    </div>
    <div className="mt-3 d-flex justify-content-center align-items-center">
      <FaPhone size="20" className="mr-2" /> 
      <p className="mb-0">0554886260 / 0508501602</p>
    </div>
  </header>
);

export default Header;
