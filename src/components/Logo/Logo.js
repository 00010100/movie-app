import React from 'react';

import logo from '../../assets/logo.svg';

import './Logo.scss';

const Logo = () => {
  return (
    <div className="Logo">
      <div className="Logo__inner">
        <img src={logo} className="Logo__img" alt="logo" />
        <span>Movies</span>
      </div>
    </div>
  );
};

export default Logo;
