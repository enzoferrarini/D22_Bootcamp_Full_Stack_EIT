import React from 'react';

const Input = ({ type, value,className,placeholder,minValue, onChange}) => {

 return (
    <input
      type={type}
      value={value}
      onChange={onChange} // Agregar onChange aquí
      className={className}   
      placeholder={placeholder} 
      min={type === 'number' ? minValue : undefined}
    />
  );
};

export default Input;