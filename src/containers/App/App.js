import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Header from 'components/Header/Header';
import Movies from 'containers/Movies/Movies';

import './App.scss';

@hot(module)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Movies />
      </div>
    );
  }
}

export default App;
