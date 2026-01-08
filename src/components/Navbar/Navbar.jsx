import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navbarData = ["Home", "About", "Docs", "Projects", "Resume"]

  return (
    <nav>
      <div className="nav-container">
        {navbarData.map((elm, idx) => {
          const path =
            idx === 0
              ? "/portfolio"
              : `/portfolio/${elm.toLowerCase()}`

          return (
            <NavLink
              key={idx}
              to={path}
              end={idx === 0}
              className={({ isActive }) =>
                isActive ? "active" : "nav-link"
              }
            >
              {elm}
            </NavLink>
          )
        })}

        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar
