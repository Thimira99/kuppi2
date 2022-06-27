import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbarTitle">
    <h1>Logo</h1>
    <ul>
      <Link to='/main'><li>Home</li></Link>
      <Link to='/login'><li>Home</li></Link>
      <li>Home</li>
      <li>Home</li>
    </ul>

  </div>

);

export default Nav;
