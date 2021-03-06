import React, { Component } from "react";
import { Link } from "react-router-dom";

// React-router-dom is used for route operation.

//  This component is the main page.
//  We have two options. Movies & Series

const Content = () => {
  return (
    <div>
      <div className="container mt-5 p-0" style={{ maxWidth: 1420 + "px" }}>
        <div className="row">
          <div className="col-md-1 ml-5 ml-sm-0 pl-5 pl-sm-0">
            {/* Click for Series. */}
            <Link to="/series">
              <div className="card ml-3">
                <div className="card-img-top">
                  <div>
                    <p className="title text-white">SERIES</p>
                  </div>
                </div>
                <div className="card-body pl-0">
                  <p className="card-text text-dark">Popular Series</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-1 ml-5 ml-sm-5 pl-5 pl-sm-2">
            {/* Click for Movies. */}
            <Link to="/popular">
              <div className="card ml-3">
                <div className="card-img-top">
                  <div>
                    <p className="title text-white">MOVIES</p>
                  </div>
                </div>
                <div className="card-body pl-0">
                  <p className="card-text text-dark">Popular Movies</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
