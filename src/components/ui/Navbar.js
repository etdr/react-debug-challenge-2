import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

  return (
    <nav>
      <ul>
        <LinkButton />
        <LinkButton />
      </ul>
    </nav>
  )
};

const LinkButton = (props) => {

  return (
    <button className="app-btn">{props.buttonText}</button>
  )
}

export default LinkButton;