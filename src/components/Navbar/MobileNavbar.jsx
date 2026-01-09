import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import {LoadPageTrangition} from './index'
const MobileNavbar = () => {
    const navbarData = ["Home", "About", "Docs", "Projects", "Resume"]
    return (
        <div className='mobileNavbar'>

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
                        onClick={(e)=>{
                            LoadPageTrangition(elm)
                            
                        }}
                    >
                        {elm}
                    </NavLink>
                )
            })}
        </div>
    )
}

export default MobileNavbar
