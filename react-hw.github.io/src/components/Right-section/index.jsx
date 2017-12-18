import React from 'react';
import Card from 'components/Card';
import './style.css'

class RightSection extends React.Component {
      render () {
      const {movie,deletMovies}= this.props;

      return (
        <div className="right">
        
          {movie.map( elem => <Card key={elem.id}
           {...elem}
            onDelete={()=>{
              deletMovies(elem.id);
            }}/>)}
        </div>
      );
    }
}

export default RightSection;