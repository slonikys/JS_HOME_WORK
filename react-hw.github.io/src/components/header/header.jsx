import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="main-header">
                <h1 className="main-header__title">Movie Mate</h1>
                <ul className="main-header__nav nav">
                  <li className="nav__item"><a href="#" className="item">about</a></li>
                  <li className="nav__item"><a href="#" className="item">browse</a></li>
                  <li className="nav__item"><a href="#" className="item">log in</a></li>
                </ul>
        </header>
      </div>
    );
  }
}

export default Header;
