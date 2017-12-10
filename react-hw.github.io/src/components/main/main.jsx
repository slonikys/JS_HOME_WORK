import React from 'react';
import './main.css';
import Header from '../header/header';
import Form from './left-section/left';
import Right from './right-section/right-section';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <Form />
          <Right />
        </div>
      </div>
    );
  }
}

export default Main;
