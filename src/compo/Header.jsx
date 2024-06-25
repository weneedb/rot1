import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header id="header">
        <div className="header_inner">
          <div className="logo">
            <Link to="/">
              <h1>🙈🙉🙊</h1>
            </Link>
          </div>
          <div className="gnb">
            <Link to="/all">
              <p>All</p>
            </Link>
            <Link to="/project">
              <p>Project</p>
            </Link>
            <Link to="/etc">
              <p>ETC</p>
            </Link>
            <Link to="/About">
              <p>About</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
