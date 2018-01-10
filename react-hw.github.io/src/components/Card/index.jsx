import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    const { title, overview, vote, genres, onDelete } = this.props;
    const listItem = genres.map(genre => (
      <li className="ChipsList__item" key={genre}>
        {genre}
      </li>
    ));
    return (
      <div className="film-card">
        <button className="delet-btn" onClick={onDelete}>
          Delete
        </button>
        <h2 className="film-card__title">{title}</h2>
        <p className="film-card__overview">{overview}</p>
        <div className="film-card__vote-average">{vote}</div>
        <ul>{listItem}</ul>
      </div>
    );
  }
}

export default Card;
