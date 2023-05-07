import React from "react";

import "./Nav.scss";

import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          {/* <Link to="/">
            Home
          </Link>
          <Link to="/todo">Todos</Link>
          <Link to="/about">About</Link> */}
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
            exact={"true"}
          >
            Home
          </NavLink>
          <NavLink
            to="/todo"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            Todos
          </NavLink>
          <NavLink
            to="/about"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/user-list"
            className={(navData) =>
              navData.isActive ? "active-style" : "none"
            }
          >
            Users
          </NavLink>
        </div>
      </>
    );
  }
}

export default Nav;
