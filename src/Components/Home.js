/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/basic.css";
import "../Styles/loading-animation.css";

import RandomPs from "./RandomPs";

function Home() {
  const navigate = useNavigate();

  function handleHomeNavigate() {
    navigate("/");
  }

  return (
    <div className="home-page">
      <div className="main-title" onClick={handleHomeNavigate}>
        <div>Land OF Porn</div>
      </div>
      <RandomPs />
    </div>
  );
}

export default Home;
