import React from 'react';
import './card.css';

class Card extends React.Component {
render () {
    const props= this.props;
    return (
    <div className="film-card" key={props.keyI}>
        <button className="delet-btn">Delete</button>
        <h2 className="film-card__title">{props.title}</h2>
        <p className="film-card__release-date">{props.overview}</p>
        <div className="film-card__vote-average">{props.vote}</div>
        <ul>{props.listItem}</ul>
    </div>
      );
    }
}

export default Card;


