import React from 'react';

/*const Button = ({ changeCount, text, delta }) => {
  console.log('props valus is ', {changeCount,text,delta})
  const handleClick = () => {
    changeCount(delta);
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};*/

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

export default Button;