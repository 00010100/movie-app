import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import TestComponent from 'components/TestComponent';

@connect(
  () => ({}),
  {},
)
@hot(module)
class App extends Component {
  render() {
    return <TestComponent />;
  }
}

export default App;
