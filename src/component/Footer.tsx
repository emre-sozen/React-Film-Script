import React, { Component } from "react";
import "../css/movie-area.css";
import Facebook from "../images/icon/social-media/facebook.svg";
import Twitter from "../images/icon/social-media/twitter.svg";
import Instagram from "../images/icon/social-media/instagram.svg";
import AppStore from "../images/store/app-store.svg";
import PlayStore from "../images/store/play-store.svg";
import WindowsStore from "../images/store/windows-store.svg";

// This area is Footer Section.

const Footer = () => {
  return (
    <footer>
      <div className="footer pb-5">
        <div className="container" style={{ maxWidth: 1450 + "px" }}>
          <div className="row">
            <ul className="nav mt-5">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Terms and Conditions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Collection Statement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Account
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <p className="nav-link-2 ml-3 mt-3">
              Copyright @ 2016 DEMO Streaming All Rights Reserved
            </p>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <div className="col-auto my-md-0 p-3 pl-sm-0 w15-l80 order-sm-1 order-3 align-self-end">
                <span className="mx-0">
                  <i aria-hidden="true">
                    <img className="w20" src={Facebook} />
                  </i>
                </span>
                <span className="mx-4">
                  <i aria-hidden="true">
                    <img className="w20" src={Twitter} />
                  </i>
                </span>
                <span className="mx-2">
                  <i aria-hidden="true">
                    <img className="w20" src={Instagram} />
                  </i>
                </span>
              </div>
            </div>
            <div className="offset-md-3 col-md-5">
              <div className=" col-auto my-md-0 mt-3 mt-sm-5 ml-2 order-sm-1 order-3  p-0 align-self-end ">
                <span className="mx-0 ">
                  <i aria-hidden="true">
                    <img className="" src={AppStore} />
                  </i>
                </span>
                <span className="mx-4">
                  <i aria-hidden="true">
                    <img className="" src={PlayStore} />
                  </i>
                </span>
                <span className="mx-2">
                  <i aria-hidden="true">
                    <img className="w25 w15-t20-l80" src={WindowsStore} />
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
