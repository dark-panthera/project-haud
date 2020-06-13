import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="title">Haud</div>
      <div className="header__section">
        <NavLink exact to="/" activeClassName="active" className="item">
          View Persons
        </NavLink>
        <NavLink to="/add" className="item">
          Add New
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
