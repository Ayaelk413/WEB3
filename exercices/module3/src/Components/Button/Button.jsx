import React from 'react';

const Button = ({ changeCount, text, delta }) => {
  const handleClick = () => {
    changeCount(delta);
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;