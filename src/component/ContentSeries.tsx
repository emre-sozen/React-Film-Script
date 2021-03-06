import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import Navbar from "./Navbar";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../css/movie-area.css";


// ContentSeries is a component that shows incoming props.

const ContentSeries = ( props ) => {
  console.log(props);

  return (
    <div>
      <div
        className="container pl-3 p-sm-0 pr-0 pr-sm-0"
        style={{ maxWidth: 1410 + "px" }}
      >
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="row d-flex justify-content-around p-0">
              <div className="d-flex justify-content-around flex-wrap">
                {props.movieList.slice(0, 21).map((movie) => (
                  <div className="card-movie">
                    <img
                      src={movie.images["Poster Art"].url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body d-flex align-items-center p-0 mt-2">
                      <p className="text">{movie.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Series is the component that performs filtering and searching.
// Send the result to ContentMovie as props.

const Series = (props) => {
  useEffect(() => {
    props.getMovies();
  }, []);

  console.log(props);

  // Filtering series
  const film = props.movies.filter(
    (movieType) => movieType.programType === "series"
  );

  // Filtering year >= 2011
  const year = [...film].filter((movie) => movie.releaseYear >= 2011);

  // Alphabet sort & initialize state
  const initiliaze = [...year].sort((a, b) =>
    a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
  );

  // This state shows the data on the screen.
  // We filter it and update the state.

  const [result, setResult] = useState(initiliaze);
  const { loading, errorMessage } = props;

  // Sorting desceding year
  const newyear = [...result].sort((a, b) =>
    b.releaseYear !== a.releaseYear
      ? b.releaseYear < a.releaseYear
        ? -1
        : 1
      : 0
  );

  // Sorting asceding year
  const oldyear = [...result].sort((a, b) =>
    a.releaseYear !== b.releaseYear
      ? a.releaseYear < b.releaseYear
        ? -1
        : 1
      : 0
  );

  // Sorting asceding title
  const ascedTitle = [...result].sort((a, b) =>
    a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
  );
  // Sorting desceding title
  const descedTitle = [...result].sort((a, b) =>
    b.title !== a.title ? (b.title < a.title ? -1 : 1) : 0
  );

  // DescedingYear Func
  const descedingYear = () => {
    setResult(newyear);
  };
  // AsscedingYear Func
  const asscedingYear = () => {
    setResult(oldyear);
  };
  // AsscedingTitle Func
  const ascedingTitle = () => {
    setResult(ascedTitle);
  };
  // DescedingTitle Func
  const descedingTite = () => {
    setResult(descedTitle);
  };
  // Search Result
  const searchResult = (e) => {
    if (e.target.value.length > 3) {
      const resulinit = result.filter((item) =>
        item.title.includes(e.target.value)
      );
      setResult(resulinit);
    } else if (e.target.value.length === 3) {
      setResult(initiliaze);
    }
  };

  // Selectbox change func
  const handleChange = (e) => {
    let val = parseInt(e.target.value);
    return val === 1
      ? descedingYear()
      : val === 2
      ? asscedingYear()
      : val === 3
      ? descedingTite()
      : ascedingTitle();
  };

  return (
    <div>
      <div className="container mt-4 p-0" style={{ maxWidth: 1400 + "px" }}>
        <div className="row">
          <div
            className="container m-0 p-sm-0"
            style={{ maxWidth: 1410 + "px" }}
          >
            <div className="row justify-content-between">
              <div className="col-5 p-0">
                <div className="input-group ml-2 ml-sm-3 mt-2">
                  <input
                    type="text"
                    className="form-search form-control shadow"
                    placeholder="Search.."
                    onChange={searchResult}
                  />
                  <button className="btn-search shadow p-0 p-sm-1 px-2 px-sm-3">
                    <i className="fas fa-search p-0 p-sm-1"></i>
                  </button>
                </div>
              </div>
              <div className="offset-md-3 col-4 p-0 pl-0 pl-sm-5 mr-5 mr-sm-0">
                <div className="d-flex justify-content-end pl-0 pl-sm-4 mt-2">
                  <select
                    name="searchtype"
                    className="form-control form-control-md searchType shadow"
                    onChange={handleChange}
                  >
                    <option disabled selected hidden>
                      Sort by
                    </option>
                    <option value="1">Desceding Year</option>
                    <option value="2">Asceding Year</option>
                    <option value="3">Desceding Title</option>
                    <option value="4">Asceding Title</option>
                  </select>
                  <span className="arrow mt-1">
                    <i className="fas fa-sort-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4">
            {loading && !errorMessage ? (
              <h1>loading... </h1>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : result.length > 0 ? (
              <ContentSeries movieList={result} />
            ) : (
              <ContentSeries movieList={result} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, { getMovies })(Series);
