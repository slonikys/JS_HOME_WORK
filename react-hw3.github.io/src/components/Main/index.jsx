import React from "react";
import "./style.css";
import Header from "components/Header";
import LeftSection from "components/Left-Section";
import RightSection from "components/Right-section";
import {
  getFilmbyApi,
  getPopularFilms,
  getUpcomingFilms,
  getTopRatedFilms
} from "components/Api";
class Main extends React.Component {
  state = {
    movies: [],
    watchlist: []
  };
  componentWillMount() {
    getPopularFilms().then(data => {
      this.setState({
        movies: data
      });
    });
    if (localStorage.getItem("watchlist") !== null) {
      this.setState({
        watchlist: JSON.parse(localStorage.getItem("watchlist"))
      });
    }
  }
  _popular = () => {
    getPopularFilms().then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _upcoming = () => {
    getUpcomingFilms().then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _topRated = () => {
    getTopRatedFilms().then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _getFilmbyApi = query => {
    getFilmbyApi(query).then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _addMovie = el => {
    if (!this.state.watchlist.some(elem => elem.id === el.id)) {
      this.setState(
        {
          watchlist: [...this.state.watchlist, el]
        },
        () => {
          localStorage.setItem(
            "watchlist",
            JSON.stringify(this.state.watchlist)
          );
        }
      );
    }
  };
  _removeMovie = id => {
    this.setState(
      {
        watchlist: this.state.watchlist.filter(element => element.id !== id)
      },
      () => {
        localStorage.setItem("watchlist", JSON.stringify(this.state.watchlist));
      }
    );
  };
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <LeftSection
            querySearch={this._getFilmbyApi}
            topRated={this._topRated}
            upcoming={this._upcoming}
            popular={this._popular}
            watch={this.state.watchlist}
            remove={this._removeMovie}
          />
          <RightSection movies={this.state.movies} addMovie={this._addMovie} />
        </div>
      </div>
    );
  }
}

export default Main;
