import React from 'react';
import v4 from 'uuid';

class NavItem extends React.Component {
render()
{
  return(  ['about', 'browse', 'log in'].map( elem =>
                  <li key={v4()} className="nav__item"><a href="#" className="nav__item">{elem}</a></li> )
  )
                }
    }
    export default NavItem