import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const navbarData = ["Home", "About", "Docs", "Projects", "Resume"]


    return (
        <>
            <nav>
                <ul>
                    {navbarData.map((elm) => {
                        return <li>{elm}</li>
                    })}
                    <label class="burger" for="burger">
                        <input type="checkbox" id="burger" />
                            <span></span>
                            <span></span>
                            <span></span>
                    </label>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
