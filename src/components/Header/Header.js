import React from 'react';

import Logo from 'components/Logo/Logo';
import Account from 'components/Account/Account';

import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__inner">
        <Logo />
        <Account />
      </div>
    </div>
  );
};

export default Header;
