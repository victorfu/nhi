import React, { Component } from 'react';
import icon from '../assets/img/icon-128.png';

class Logo extends Component {
  render() {
    return (
      <img
        style={{
          width: '36px',
          height: '36px',
        }}
        src={icon}
        alt="extension icon"
      />
    );
  }
}

export default Logo;
