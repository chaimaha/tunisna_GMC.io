import React from "react";
import { useHistory } from "react-router-dom";
import "./Land.css";
const LandPage = () => {
  const history = useHistory();
  return (
    <div className="app">
      <header className="header_land"></header>
      <main className="page_body">
        <h1 className="title_zina">
          <span className="title_span">TUNISNA</span> Tunisia,
          <br /> Like you've never seen before
        </h1>
        <p className="about_parag">
          Share beautiful photos for our sublime Tunisia.
          <br />
          Organize hikes and trips .<br />
          Share or sell equipment needed for camping and travel.
        </p>
        <button className="loginForm" onClick={() => history.push("/login")}>
          Share and Inspire
        </button>
      </main>
    </div>
  );
};

export default LandPage;
