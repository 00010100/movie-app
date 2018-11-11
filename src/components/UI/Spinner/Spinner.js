import React from 'react';

import './Spinner.scss';

const Spinner = () => (
  <div className="Spinner-container">
    <div className="lds-css ng-scope">
      <div className="lds-ellipsis">
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
        <div>
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default Spinner;
