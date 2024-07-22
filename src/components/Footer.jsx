import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-light text-center py-3">
    <div className="d-flex justify-content-center">
      <a href="https://facebook.com" className="mx-2"><FaFacebook size="30" /></a>
      <a href="https://instagram.com" className="mx-2"><FaInstagram size="30" /></a>
    </div>
  </footer>
);

export default Footer;
