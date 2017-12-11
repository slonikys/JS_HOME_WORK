import React from 'react';
import './style.css';

class Header extends React.Component {
  render() {
    return (
              <header className="main-header">
                <h1 className="main-header__title">Movie Mate</h1>
                <ul className="main-header__nav nav">
                  {['about', 'browse', 'log in'].map( elem =>
                  <li key={elem} className="nav__item"><a href="#" className="nav__item">{elem}</a></li> )}
                </ul>
              </header>
           );
  }
}

export default Header;
