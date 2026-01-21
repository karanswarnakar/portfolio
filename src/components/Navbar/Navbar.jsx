import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNavbar from './MobileNavbar'
import MenuBtn from './MenuBtn'

const Navbar = () => {
  const navbarData = ["Home", "About", "Docs", "Projects", "Resume"]
  const [isMenuOpen, setisMenuOpen] = useState(false)

  function menuClose() {
    setisMenuOpen(false)

    
  }
  setInterval(() => {
    if (window.innerWidth >= 600) {
       menuClose()
    }else{
      // console.log("Hi");
      
    }
  }, 10);








  return (
    <>
      <nav
      id='nav'
        style={
          {
            height: isMenuOpen===true? "100vh" : "auto",
            position: isMenuOpen===true? "fixed" : "absolute",
            // backgroundColor:"red"
          }
        }
        onClick={(e)=>{
          
          if (e.target.id === "nav") {
            menuClose()
          }
          
        }}
      >
        {/* <MobileNavbar/> */}
        {isMenuOpen === true ? <MobileNavbar /> : " "}

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

          <MenuBtn currentStatus={isMenuOpen} changeMenuStatus={setisMenuOpen} />
        </div>
      </nav>

    </>
  )
}

export default Navbar
