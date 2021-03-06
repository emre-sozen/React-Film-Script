import "../css/movie-area.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

// This area is Navbar Section.

const Navbar = (props) => {
  return (
    <div className="container-fluid shadow p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary p-0">
        <div className="container" style={{ maxWidth: 1450 + "px" }}>
          <a className="navbar-brand text-white mt-2 ml-3 ml-sm-0" href="#">
            <p className="logo-text">DEMO Streaming</p>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <button type="button" className="btn btn-link text-white">
                Log in
              </button>
              <button
                type="button"
                className="btn btn-dark text-white ml-0 ml-sm-4"
              >
                Start your free trial
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light shadow bg-dark p-0">
        <div className="container" style={{ maxWidth: 1450 + "px" }}>
          <a className="navbar-brand text-white" href="#">
            <p className="title mt-1 mb-2  ml-3 ml-sm-0">
              Popular {props.title}
            </p>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
