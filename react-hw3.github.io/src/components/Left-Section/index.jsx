import React from "react";
import "./style.css";
import WatchList from "components/Watchlist";
import Form from "components/Form";
import Buttons from "components/Buttons";
export default class LeftSection extends React.Component {
  render() {
    const {
      querySearch,
      topRated,
      upcoming,
      popular,
      watch,
      remove
    } = this.props;
    console.log(topRated);
    return (
      <section className="left-section">
        <Form onSubmit={querySearch} />
        <Buttons Top={topRated} Up={upcoming} Popular={popular} />
        <WatchList watch={watch} removeMovie={remove} />
      </section>
    );
  }
}
