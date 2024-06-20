import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header id="header">
        <div className="header_inner">
          <div className="logo">
            <Link to="/">
              <h1>LOGO</h1>
            </Link>
          </div>
          <div className="gnb">
            <Link to="/Page1">
              <p>Page1</p>
            </Link>
            <Link to="/Page2">
              <p>Page2</p>
            </Link>
            <Link to="/Page3">
              <p>Page3</p>
            </Link>
            <Link to="/Page4">
              <p>Page4</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
