import React from "react";
import Card from "components/Card";
import "./style.css";

class RightSection extends React.Component {
  render() {
    const { movies, addMovie } = this.props;
    return (
      <div className="right">
        {movies.map(elem => (
          <Card
            key={elem.id}
            {...elem}
            onClick={() => {
              addMovie(elem);
            }}
          />
        ))}
      </div>
    );
  }
}

export default RightSection;
