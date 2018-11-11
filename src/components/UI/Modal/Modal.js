import React, { Component } from 'react';

import Icon from 'components/Icon/Icon';

import './Modal.scss';

export default class Modal extends Component {
  componentDidMount() {
    document.body.classList.add('modal-open');
  }

  componentWillUnmount() {
    document.body.classList.remove('modal-open');
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const { children, show, modalClosed, poster } = this.props;

    return (
      <div className="Modal-wrap">
        <div
          className="Backdrop"
          style={{
            background: `url(${poster}) no-repeat`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            filter: 'blur(10px)',
          }}
        />
        <button className="close-btn" onClick={modalClosed}>
          <Icon name="close" />
        </button>
        <div
          className="Modal"
          style={{
            zIndex: show ? '500' : '-1',
            opacity: show ? '1' : '0',
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}
