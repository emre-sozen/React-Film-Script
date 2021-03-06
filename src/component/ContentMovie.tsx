import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getMovies } from "../actions";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../css/movie-area.css";

// ContentMovie is a component that shows incoming props.

const ContentMovie = (props) => {
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

// Movies is the component that performs filtering and searching.
// Send the result to ContentMovie as props.

const Movies = (props) => {
  useEffect(() => {
    props.getMovies();
  }, []);

  const [result, setResult] = useState(props.movies);
  const { loading, errorMessage } = props;

  console.log(props);

  // This state shows the data on the screen.
  // We filter it and update the state.

  // DescedingYear Func
  const descedingYear = () => {
    dispatch({
      type: "YILA_GORE_AZALAN",
      payload: [...result].sort((a, b) => b.releaseYear - a.releaseYear),
    });
    setResult(props.movies);
  };
  // AsscedingYear Func
  const asscedingYear = () => {
    dispatch({
      type: "YILA_GORE_ARTAN",
      payload: [...result].sort((a, b) =>
        a.releaseYear !== b.releaseYear
          ? a.releaseYear < b.releaseYear
            ? -1
            : 1
          : 0
      ),
    });
    setResult(props.movies);
  };
  // AsscedingTitle Func
  const ascedingTitle = () => {
    dispatch({
      type: "TITLE_GORE_ARTAN",
      payload: [...result].sort((a, b) =>
        a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
      ),
    });
    setResult(props.movies);
  };
  // DescedingTitle Func
  const descedingTite = () => {
    dispatch({
      type: "TITLE_GORE_AZALAN",
      payload: [...result].sort((a, b) =>
        b.title !== a.title ? (b.title < a.title ? -1 : 1) : 0
      ),
    });
    setResult(props.movies);
  };

  const searchTitle = (e) => {
    dispatch({
      type: "TITLE_SEARCH",
      payload: result.filter((item) => item.title.includes(e.target.value)),
    });
    setResult(props.movies);
  };
  const clearTitle = () => {
    dispatch({ type: "TITLE_CLEAR", payload: result });
    setResult(result);
  };

  const dene = (e) => {
    if (e.target.value.length > 3) {
      searchTitle(e);
    } else if (e.target.value.length == 3) {
      clearTitle();
    }
  };

  // Search Result
  /*   const searchResult = (e) => {
    if (e.target.value.length > 3) {
      const resulinit = result.filter((item) =>
        item.title.includes(e.target.value)
      );
      console.log(resulinit);
      setResult(resulinit);
    } else if (e.target.value.length === 3) {
      setResult(props.movies);
    }
  }; */

  // Selectbox change func
  /*   const handleChange = (e) => {
    let val = parseInt(e.target.value);
    return val == 1
      ? descedingYear()
      : val == 2
      ? asscedingYear()
      : val == 3
      ? descedingTite()
      : ascedingTitle();
  };
 */
  const handleChange = (e) => {
    let val = parseInt(e.target.value);
    if (val == 1) {
      descedingYear();
    } else if (val == 2) {
      asscedingYear();
    } else if (val == 3) {
      descedingTite();
    } else if (val == 4) {
      ascedingTitle();
    }
  };

  const dispatch = useDispatch();

  return (
    <div>
      <div className="container mt-4 p-0" style={{ maxWidth: 1400 + "px" }}>
        <div className="row">
          <div className="container m-0 p-0" style={{ maxWidth: 1410 + "px" }}>
            <div className="row justify-content-between ">
              <div className="col-5 p-0">
                <div className="input-group ml-3 mt-2">
                  <input
                    type="text"
                    className="form-search form-control shadow"
                    placeholder="Search.."
                    onChange={dene}
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
            {result.length > 0 ? (
              <ContentMovie movieList={props.movies} />
            ) : (
              <ContentMovie movieList={result} />
            )}

            {/* {loading && !errorMessage ? (
              <h1>loading... </h1>
            ) : errorMessage ? (
              <div className="errorMessage">{errorMessage}</div>
            ) : result.length > 0 ? (
              <ContentMovie movieList={props.movies} />
            ) : (
              <ContentMovie movieList={props.movies} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    movies: state.movies,
    series: state.series,
    azalanyear: state.yearArtan,
    artanyear: state.yearAzalan,
    titleazalan: state.titleazalan,
    titleartan: state.titleartan,
  };
};

/* function mapDispatchToProps(dispatch) {
  return { 
          action1: bindActionCreators(getMovies, dispatch)
          //action1: ()=> dispatch(action1())
         }
} */

export default connect(mapStateToProps, { getMovies })(Movies);
