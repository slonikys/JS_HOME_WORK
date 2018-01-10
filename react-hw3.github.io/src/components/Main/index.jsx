import React from "react";
import "./style.css";
import Header from "components/Header";
import LeftSection from "components/Left-Section";
import RightSection from "components/Right-section";

class Main extends React.Component {
  state = {
    movies: [],
    watchlist: []
  };
  componentWillMount() {
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    const popularUrl =
      "https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1";
    fetch(popularUrl + apiKey)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  }
  _getFilmbyApi = query => {
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    const queryUrl =
      "https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false";
    fetch(queryUrl + apiKey + `&query=${query}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        console.log(data.results);
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  };
  _getPopularFilms = () => {
    const popularUrl =
      "https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1";
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    fetch(popularUrl + apiKey)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  };
  _getPopularFilms = () => {
    const popularUrl =
      "https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1";
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    fetch(popularUrl + apiKey)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  };
  _getUpcomingFilms = () => {
    const upcomingUrl =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1";
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    fetch(upcomingUrl + apiKey)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  };
  _getTopRatedFilms = () => {
    const topRatedUrl =
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
    const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
    fetch(topRatedUrl + apiKey)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("error while fetching, " + response.statusText);
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
      })
      .catch(err => console.log(err));
  };
  _addMovie = el => {
    if (!this.state.watchlist.some(elem => elem.id === el.id)) {
      this.setState({
        watchlist: [...this.state.watchlist, el]
      });
    } else {
      return false;
    }
  };
  _removeMovie = el => {
    this.setState({
      watchlist: this.state.watchlist.filter(element => element.id !== el.id)
    });
  };
  render() {
    return (
      <div>
        <Header />
        <div className="wrap-flex">
          <LeftSection
            querySerch={this._getFilmbyApi}
            topRated={this._getTopRatedFilms}
            upcoming={this._getUpcomingFilms}
            popular={this._getPopularFilms}
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
