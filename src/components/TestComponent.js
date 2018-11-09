import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  () => ({}),
  {},
)
class TestComponent extends Component {
  render() {
    return (
      <div>
        <p>Test Component</p>
      </div>
    );
  }
}

export default TestComponent;
