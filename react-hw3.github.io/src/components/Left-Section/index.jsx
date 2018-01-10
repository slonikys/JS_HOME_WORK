import React from "react";
import "./style.css";
import WatchList from "components/Watchlist";

export default class LeftSection extends React.Component {
  render() {
    const {
      querySerch,
      topRated,
      upcoming,
      popular,
      watch,
      remove
    } = this.props;
    let input = null;
    return (
      <section className="left-section">
        <form
          action="#"
          className="main-form"
          onSubmit={evt => {
            evt.preventDefault();
            querySerch(input.value);
          }}
        >
          <input className="input" type="text" ref={node => (input = node)} />
        </form>
        <button onClick={popular}>popular</button>
        <button onClick={topRated}>Top rated</button>
        <button onClick={upcoming}>Upcoming</button>
        <WatchList Watch={watch} removeMovie={remove} />
      </section>
    );
  }
}
