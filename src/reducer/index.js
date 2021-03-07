const INITIAL_STATE = {
  data: [],
  movies: [],
  series: [],
  loading: true,
  errorMessage: null,
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_DATA_MOVIE":
      return { ...state, loading: false, movies: action.payload };
    case "GET_DATA_SERIES":
      return { ...state, loading: false, series: action.payload };

    case "YILA_GORE_AZALAN":
      return { ...state, loading: false, movies: action.payload };
    case "YILA_GORE_ARTAN":
      return { ...state, loading: false, movies: action.payload };

    case "MOVIES_TITLE_SEARCH":
      return { ...state, loading: false, movies: action.payload };
    case "MOVIES_TITLE_CLEAR":
      return { ...state, loading: false, movies: action.payload };

    case "TITLE_GORE_AZALAN":
      return { ...state, loading: false, movies: action.payload };
    case "TITLE_GORE_ARTAN":
      return { ...state, loading: false, movies: action.payload };

    case "SERIES_TITLE_SEARCH":
      return { ...state, loading: false, series: action.payload };
    case "SERIES_TITLE_CLEAR":
      return { ...state, loading: false, series: action.payload };

    case "SERIES_YILA_GORE_AZALAN":
      return { ...state, loading: false, series: action.payload };
    case "SERIES_YILA_GORE_ARTAN":
      return { ...state, loading: false, series: action.payload };

    case "SERIES_TITLE_GORE_AZALAN":
      return { ...state, loading: false, series: action.payload };
    case "SERIES_TITLE_GORE_ARTAN":
      return { ...state, loading: false, series: action.payload };

    case "SERIES_TITLE_SEARCH":
      return { ...state, loading: false, series: action.payload };
    case "SERIES_TITLE_CLEAR":
      return { ...state, loading: false, series: action.payload };

    case "GET_DATA_ERROR":
      return {
        ...state,
        loading: false,
        errorMessage: "ERROR 404 FOUND",
        message: action.payload,
      };
    default:
      return INITIAL_STATE;
  }
};

const rootReducer = (state, action) => {
  return reducer(state, action);
};

// filter((movie) => movie.releaseYear >= 2011)
