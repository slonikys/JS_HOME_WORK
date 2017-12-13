import React from 'react';
import Card from 'components/Card';
import './style.css'
import v4 from 'uuid';

class RightSection extends React.Component {
      render () {
      const {movie}= this.props;
      
      return (
        <div className="right">
          {movie.map( elem => <Card key={v4()} {...elem}/>)}
        </div>
      );
    }
}

export default RightSection;