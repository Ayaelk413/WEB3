import React from 'react';
import vinci from "../Header/LOGO HE VINCI.png";

const Header = ({course}) => {
  return (<div>
    <img src = {vinci} alt = "logo vinci"/>
    <h1>{course}</h1>
    </div>)
}

export default Header;
