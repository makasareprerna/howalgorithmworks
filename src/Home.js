import React from "react";
import "./Home.css";
import home from "./home.jpeg";
import sketch from "./sketch";
import P5Wrapper from 'react-p5-wrapper';


function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img className="home__image" src={home} alt="" />
          <div className="home__row">
            <P5Wrapper sketch={sketch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
