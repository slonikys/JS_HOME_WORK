import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    const {
      poster_path,
      title,
      release_date,
      overview,
      vote_average,
      onClick
    } = this.props;
    return (
      <div className="film-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="film-poster"
          className="film-card__img"
        />
        <h3 className="film-card__title">{title}</h3>
        <p className="film-card__release-date">Release date:{release_date}</p>
        <p className="film-card__overview">{overview}</p>
        <div className="film-card__vote-average">{vote_average}</div>
        <button onClick={onClick}>+</button>
      </div>
    );
  }
}

export default Card;
