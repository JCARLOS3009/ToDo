import './checkbox.css';

import { useState } from 'react';

const Checkbox = ({ label, ...options }) => {

  return (
    <label className='checkbox-container'>
      <input type='checkbox' {...options}/>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;