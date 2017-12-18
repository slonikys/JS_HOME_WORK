import React from 'react';

class NavItem extends React.Component {
render()
     {
      const {link} = this.props;
      return(link.map( elem =>
                  <li key={elem} className="nav__item"><a href="#" className="nav__item">{elem}</a></li> )
  )
                }
    }
    export default NavItem