import React from 'react';
import movies from './film-card/movies';
import Card from './film-card/card';
import './right.css'

class Right extends React.Component {
    render () {
        let b =45;
      return (
        <div className="right">
          {movies.map((elem,i)=>{return <Card {...elem} keyI={i}
          listItem ={elem.genres.map((genre,i) => <li className="ChipsList__item"key={b++}>{genre}</li>)}/>})}
        </div>
      );
    }
}

export default Right;