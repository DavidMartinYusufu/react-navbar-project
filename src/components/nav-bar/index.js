import React  from "react";
import "./index.css";
import { NavLink } from 'react-router-dom'

export default function NavBar() {

  return (
    <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/NewsPage'>News</NavLink>
          <NavLink to='/ContactPage'>Contact</NavLink>
          <NavLink to={'/AboutPage'}>About</NavLink>
      </div>

      <div className="card w-20 ma-0">
        <section className="card-text" data-testid="tab-content">
          <span>PAGE</span>
        </section>
      </div>
    </div>
  );
}