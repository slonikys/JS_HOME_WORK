export const topRatedUrl =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const apiKey = "&api_key=f24a0fd18f52218851075901c5a108a0&";
export const queryUrl =
  "https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false";
export const popularUrl =
  "https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1";
export const upcomingUrl =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1";

export const getFilmbyApi = query => {
  return fetch(queryUrl + apiKey + `&query=${query}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error while fetching, " + response.statusText);
    })
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};
export const getPopularFilms = () => {
  return fetch(popularUrl + apiKey)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error while fetching, " + response.statusText);
    })
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};

export const getUpcomingFilms = () => {
  return fetch(upcomingUrl + apiKey)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error while fetching, " + response.statusText);
    })
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};
export const getTopRatedFilms = () => {
  return fetch(topRatedUrl + apiKey)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("error while fetching, " + response.statusText);
    })
    .then(data => {
      return data.results;
    })
    .catch(err => console.log(err));
};
