import React from "react";
import "./Header.css";
import logo from "./logo.png";
import {SetAlgorithm} from "./sketch"



function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />

      <div className="header__nav">
        <div className="header__option">
          <span className="header_optionLineOne">Quicksort</span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Bubblesort</span>
        </div>

        <div className="header__option">
          <span className="header_optionLineOne">Insertionsort</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Selectionsort</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Heapsort</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Mergesort</span>
        </div>
        
        <button onClick={() => SetAlgorithm("algoName")}/>
        
      </div>
    </div>
  );
}

export default Header;
