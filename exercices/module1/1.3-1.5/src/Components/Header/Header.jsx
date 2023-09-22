import React from 'react';
import vinci from "../Header/LOGO HE VINCI.png";

const Header = (props) => {
  console.log(props);
  return (
  <div>
    <img src = {vinci} alt = "logo vinci"/>
    <h1>{props.course}</h1>
  </div>);
}

export default Header;
