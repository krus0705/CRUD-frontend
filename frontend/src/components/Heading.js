import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'

export const Heading = () => {
  return (
    <div className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">Logo</NavLink>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <NavLink to="/" exact activeStyle={{ color: '#2a6496' }}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/insert" exact activeStyle={{ color: '#2a6496' }}>Insert</NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeStyle={{ color: '#2a6496' }}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/listview" exact activeStyle={{ color: '#2a6496' }}>List View</NavLink>
              </li>
              <li><a className="cursor" ></a></li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
  );
};
