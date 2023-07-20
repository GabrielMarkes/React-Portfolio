import React from "react";
import "./Range.css";
import Html from "./imgs/htmlimg.png";
import Css from "./imgs/cssimg.png";
import Reactimg from "./imgs/reactimg.png";

export default function Range() {
  return (
    <div id="skills" className="range">
        <div className="gap">
      <h1 className="habilities"> Skills</h1>
      <div className="cards">
        <div className="card">
          <h1>HTML</h1>
          <img className="html" src={Html} alt="HTML" />
          <p>Markup language used to create the basic structure of web pages.</p>
          <a className="readmore" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html">
            Read more
          </a>
        </div>
        <div className="card">
          <h1>CSS</h1>
          <img src={Css} alt="CSS" />
          <p>Style used to make web pages visually appealing and stylized.</p>
          <a  className="readmore" href="https://developer.mozilla.org/en-US/docs/Web/CSS">Read more</a>
        </div>
        <div className="card">
          <h1>React</h1>
          <img src={Reactimg} alt="React" />
          <p>A JavaScript library for building interactive and reactive user interfaces in web applications.</p>
          <a className="readmore" href="https://react.dev">Read more</a>
        </div>
      </div>
      </div>
    </div>
    
  );
}
