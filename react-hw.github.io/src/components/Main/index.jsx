import React from "react";
import "./style.css";
import Header from "components/Header";
import Form from "components/Form";
import RightSection from "components/Right-section";
import movies from "components/Fakedb";

class Main extends React.Component {
  state = {
    movies: movies
  };
  _handelFormSubmit = el => {
    this.setState({
      movies: [...this.state.movies, el]
    });
  };
  _deletMovies = id => {
    console.log(id);
    this.setState({ movies: this.state.movies.filter(elem => elem.id !== id) });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <Form onFormSubmit={this._handelFormSubmit} />
          <RightSection
            movie={this.state.movies}
            deletMovies={this._deletMovies}
          />
        </div>
      </div>
    );
  }
}

export default Main;
