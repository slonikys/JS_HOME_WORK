import React from "react";
import "./style.css";
import NavItem from "components/Navitem";

class Header extends React.Component {
  render() {
    const linkItems = ["about", "browse", "log in"];
    return (
      <header className="main-header">
        <h1 className="main-header__title">Movie Mate</h1>
        <ul className="main-header__nav nav">
          <NavItem link={linkItems} />
        </ul>
      </header>
    );
  }
}
export default Header;
