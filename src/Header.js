import React from "react";
import "./Header.css";

export default function Header() {
  function handleMenuClick() {
    window.location.reload();
  }

  return (
    <div className="header">
      <ul className="list">
        <li className="item">
          <a href="#" onClick={handleMenuClick}>
            Menu
          </a>
        </li>
        <li className="item">
          <a href="#skills">Skills</a>
        </li>
        <li className="item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <h3 className="logo">
        <a href="https://github.com/GabrielMarkes"> Gabriel.dev </a>
      </h3>
    </div>
  );
}





