import React, { Component } from "react";
import "./style.css";
export default class Watchcard extends Component {
  render() {
    const {
      poster_path,
      title,
      release_date,
      vote_average,
      onClick
    } = this.props;
    return (
      <div className="watchcard">
        <img
          className="card-img"
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="poster"
        />
        <div className="Card_body">
          <h3 className="card_title">{title}</h3>
          <p className="card_release">Released:{release_date}</p>
          <p className="card_rating">{vote_average}</p>
          <button className="deletbtn" onClick={onClick}>
            Delete Card
          </button>
        </div>
      </div>
    );
  }
}
