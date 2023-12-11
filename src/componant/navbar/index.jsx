import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
        <div className="nav">
        <div>
          <h2 style={{ cursor: "pointer" }}>PORTFILIO</h2>
        </div>

        <div className="navcon">
        <NavLink
          to="/"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          ABOUT ME
        </NavLink>
        <NavLink
          to="/portfiliao"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          PORTFILIO
        </NavLink>
        <NavLink
          to="/contact"
          className={"mrgn"}
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "green" : "",
              textDecoration: "none",
              padding: isActive ? "2px" : "",
              fontSize: isActive ? "20px" : "",
            };
          }}
        >
          CONTACT
        </NavLink>
        </div>
        <button className="btn">HIRE ME</button>
      </div>
    </div>
  )
}

export default Nav;