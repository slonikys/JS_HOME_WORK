import React from 'react';
import './style.css';

class Card extends React.Component {
render () {
    const props= this.props;
    return (
    <div className="film-card">
        <button className="delet-btn">Delete</button>
        <h2 className="film-card__title">{props.title}</h2>
        <p className="film-card__overview">{props.overview}</p>
        <div className="film-card__vote-average">{props.vote}</div>
        <ul>{props.listItem}</ul>
    </div>
      );
    }
}

export default Card;


