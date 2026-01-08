import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  const navbarData = ["Home", "About", "Docs", "Projects", "Resume"]
  const [isMenuOpen, setisMenuOpen] = useState(false)

  function menuOpen() {
  
  }


  return (
    <>
      <nav>
        {/* <MobileNavbar/> */}
          {isMenuOpen === true ? <MobileNavbar  /> : " "}

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

          <label className="burger" htmlFor="burger"
          >
            <input type="checkbox" id="burger"
              onClick={(e) => {
                if (!isMenuOpen === true) {
                  setisMenuOpen(true)
                } else {
                  setisMenuOpen(false)
                }

              }}
            />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </nav>
       
    </>
  )
}

export default Navbar
