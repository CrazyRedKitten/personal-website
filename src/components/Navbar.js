import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Cat from "../icons/CatLogoV9.svg";
import CatTongue from "../icons/CatTongue.svg";

const NavBar = () => {
  const [pressed, setPressed] = useState(false);

  const changePressed = () => {
    setPressed(!pressed);
  };

  return (
    <Fragment>
      <nav className='navbar sticky-top navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand mb-0 h1' onClick={changePressed}>
          <img
            src={pressed ? CatTongue : Cat}
            width='30'
            height='30'
            class='d-inline-block align-top'
            alt=''
          />{" "}
          CrazyRedKitten
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse collapse' id='navbarNavAltMarkup'>
          <ul className='navbar-nav mr-auto'>
            <Link className='nav-item nav-link' to='/'>
              <span>Home</span>
            </Link>
            <Link className='nav-item nav-link' to='/projects'>
              Small Projets
            </Link>
            <Link className='nav-item nav-link' to='/Contact'>
              Contact
            </Link>
          </ul>
          <div className='navbar-nav'>
            <Link className='nav-item nav-link' to='/Login'>
              Log in
            </Link>
            <Link className='nav-item nav-link' to='/Register'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
