import React from 'react';
import './Popup.css';
import Logo from '../../containers/Logo';

const Popup = () => {
  return (
    <div className="app">
      <header className="app-header">健保文件</header>
      <Logo />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/1.0_1110301.pdf"
          target="_blank"
          rel="noreferrer"
        >
          日上傳1.0文件
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/2.0_1120831.pdf"
          target="_blank"
          rel="noreferrer"
        >
          日上傳2.0文件
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/1120825.pdf"
          target="_blank"
          rel="noreferrer"
        >
          月申報文件
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/pay_std_1121101.pdf"
          target="_blank"
          rel="noreferrer"
        >
          牙科支付標準
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/nhicard_1041116.pdf"
          target="_blank"
          rel="noreferrer"
        >
          健保卡格式
        </a>
      </div>
    </div>
  );
};

export default Popup;
