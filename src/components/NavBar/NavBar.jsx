import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue'
          })} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({
            color: isActive ? 'red' : 'blue'
          })} to={"/cart"}>Корзина</NavLink>
        </li>

      </ul>
    </div>
  );
};

export default NavBar;
