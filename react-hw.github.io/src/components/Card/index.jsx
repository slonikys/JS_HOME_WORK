import React from 'react';
import './style.css';
import v4 from 'uuid';

class Card extends React.Component {
render () {
    const {title,overview,vote,genres}= this.props;
    const listItem = genres.map(genre => <li className="ChipsList__item" key ={v4()}>{genre}</li>);
    
    return (
    <div className="film-card">
        <button className="delet-btn">Delete</button>
        <h2 className="film-card__title">{title}</h2>
        <p className="film-card__overview">{overview}</p>
        <div className="film-card__vote-average">{vote}</div>
        <ul>{listItem}</ul>
    </div>
      );
    }
}

export default Card;


