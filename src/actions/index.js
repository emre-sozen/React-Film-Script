import axios from "axios";

export const getData = () => (dispatch) => {
  axios
    .get(
      "https://raw.githubusercontent.com/pankod/frontend-challenge/43670085762ee35eea5315042c3c582b08252e87/feed/sample.json"
    )
    .then(
      (response) => dispatch({ type: "GET_DATA_SUCCESS", payload: response.data.entries }) && 
      dispatch({ type: "GET_DATA_MOVIE", payload: response.data.entries.filter((movie) => movie.programType === "movie" && movie.releaseYear >= 2010).sort((a, b) =>
      a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
    ) }) && 
      dispatch({ type: "GET_DATA_SERIES", payload: response.data.entries.filter((series) => series.programType === "series" && series.releaseYear >= 2010).sort((a, b) =>
      a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
    ) })
    )
    .catch((error) => dispatch({ type: "GET_DATA_ERROR", payload: error }));
};
