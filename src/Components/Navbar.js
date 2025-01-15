import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
          style={{ border: "2px solid black", boxShadow: "1px 5px 10px black" }}
        >
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="/"> */}
            <Link className="navbar-brand" to="/">
              <h2
                style={{
                  color: "black",
                  padding: "10px",
                  textAlign: "center",
                  textShadow: "5px 5px 15px  red",
                }}
              >
                DailyNews
              </h2>
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ padding: "10px", margin: "0px 50px" }}
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active link-info "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link " to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link " to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/entertainment">
                    Entertainment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
