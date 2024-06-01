import React, { Component } from 'react';
import icon from '../assets/img/icon-128.png';

class Logo extends Component {
  render() {
    return (
      <img
        style={{
          width: '40px',
          height: '40px',
        }}
        src={icon}
        alt="extension icon"
      />
    );
  }
}

export default Logo;
