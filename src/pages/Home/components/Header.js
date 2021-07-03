import React from 'react';

// import { Container } from './styles';

function Header() {
  return (
    <header className="header">
        <div className="toolbar">
          <div className="">
            <span>
              Conecta Faetec
            </span>
          </div>
          <div className="">
            <button>Novo Post</button>
            <span>img1</span>
            <span>img2</span>
          </div>
        </div>
      </header>
  );
}

export default Header;