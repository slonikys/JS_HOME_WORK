import React from 'react';
import movies from './film-card/movies';
import Card from './film-card';
import './style.css'

class RightSection extends React.Component {
    render () {
      return (
        <div className="right">
          {movies.map((elem,i)=>{return <Card key={elem.id}{...elem} 
          listItem ={elem.genres.map(genre => <li className="ChipsList__item" key ={genre}>{genre}</li>)}/>})}
        </div>
      );
    }
}

export default RightSection;