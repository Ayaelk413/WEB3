import React from 'react';

const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    const parsedDelta = parseInt(e.target.dataset.delta, 10);
    changeCount(parsedDelta);
  };

  return (
    <button 
    onClick={handleClick} data-delta={delta}>{text}
    </button>
  );
};

export default Button;