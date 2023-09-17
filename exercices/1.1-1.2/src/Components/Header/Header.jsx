import React from 'react';
import vinci from "../Header/logo.svg";

const Header = ({course}) => {
  return (<div><h1>{course}</h1><img src = {vinci} alt = "logo vinci"/></div>)
}

export default Header;
