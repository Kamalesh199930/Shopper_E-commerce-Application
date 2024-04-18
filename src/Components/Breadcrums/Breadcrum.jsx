import React from 'react';
import "./Breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  // Check if product exists and has the category property
  if (!product || !product.category) {
    return (
      <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon} alt=''/> Loading...
      </div>
    );
  }
  
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=''/> Shop <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name}
    </div>
  );
};

export default Breadcrum;
