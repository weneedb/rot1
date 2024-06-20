import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        window.location.href = "/page1";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <Link to="/page3">
        <div className="title">
          <h1>1234</h1>
          <p className="blink">Please press Enter</p>
        </div>
      </Link>
    </>
  );
}

export default Home;
