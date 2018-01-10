import React, { Component } from "react";
import WatchCard from "components/Watchcard";
import "./style.css";

export default class WatchList extends Component {
  render() {
    const { watch, removeMovie } = this.props;
    return (
      <div className="watch">
        <h2>Watchlist</h2>
        {watch.map(elem => (
          <WatchCard
            key={elem.id}
            {...elem}
            onClick={() => {
              removeMovie(elem.id);
            }}
          />
        ))}
      </div>
    );
  }
}
