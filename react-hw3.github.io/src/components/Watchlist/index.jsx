import React, { Component } from "react";
import WatchCard from "components/Watchcard";
import "./style.css";

export default class WatchList extends Component {
  render() {
    const { Watch, removeMovie } = this.props;
    console.log(Watch);
    return (
      <div className="watch">
        <h2>Watchlist</h2>
        {Watch.map(elem => (
          <WatchCard
            key={elem.id}
            {...elem}
            onClick={() => {
              removeMovie(elem);
            }}
          />
        ))}
      </div>
    );
  }
}
