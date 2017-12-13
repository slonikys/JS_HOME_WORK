import React from 'react';
import './style.css';
import Header from 'components/Header';
import Form from 'components/Form';
import RightSection from 'components/Right-section';
import movies from 'components/Fakedb';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <Form />
          <RightSection movie={movies}/>
        </div>
      </div>
    );
  }
}

export default Main;
