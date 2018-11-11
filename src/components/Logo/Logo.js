import React from 'react';

import './Logo.scss';

const Logo = (props) => {
  return (
    <div className="Logo">
      <div className="Logo__inner">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
        <span>Movies</span>
      </div>
    </div>
  );
};

export default Logo;
