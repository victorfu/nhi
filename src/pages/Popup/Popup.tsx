import React, { useEffect, useState } from 'react';
import './Popup.css';
import Logo from '../../containers/Logo';

interface KamajiLink {
  name: string;
  url: string;
}

const Popup = () => {
  const [links, setLinks] = useState<KamajiLink[]>([]);

  useEffect(() => {
    fetch('https://dentallio.github.io/totoro-fonts/links.json')
      .then((res) => res.json())
      .then(setLinks)
      .catch(console.error);
  }, []);

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
        {links.map(({ name, url }) => (
          <a
            key={name}
            className="pdf-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {name}
          </a>
        ))}
        {/* <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/1.0_1110301.pdf"
          target="_blank"
          rel="noreferrer"
        >
          日上傳1.0文件
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/nhi2.pdf"
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
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/CSAPISpec.pdf"
          target="_blank"
          rel="noreferrer"
        >
          控制軟體API
        </a>
        <a
          className="pdf-link"
          href="https://kamaji.dentall.dev/guide.pdf"
          target="_blank"
          rel="noreferrer"
        >
          控制軟體安裝指引
        </a> */}
      </div>
    </div>
  );
};

export default Popup;
