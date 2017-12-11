import React from 'react';
import './main.css';
import Header from 'components/header';
import Form from './left-section';
import RightSection from './right-section';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <Form />
          <RightSection />
        </div>
      </div>
    );
  }
}

export default Main;
