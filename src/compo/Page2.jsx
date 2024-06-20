import React from "react";
import { useNavigate } from "react-router-dom";

function Page2(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bnavi">
        <h1>Page2</h1>
        <ul>
          <li>
            <button onClick={() => navigate("/page1")}>⬅</button>
          </li>
          <li>
            <button onClick={() => navigate("/page3")}>➡</button>
          </li>
          <li>
            <button onClick={() => navigate("/")}>🏡</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Page2;
