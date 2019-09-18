'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/simple/states">with states</NavLink>
      <br />
      <NavLink to="/simple/redux">with Redux</NavLink>
    </nav>
  )
}