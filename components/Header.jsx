import React from "react"
import { Link, NavLink } from "react-router-dom"
import Image from "../assets/images/avatar-icon.png"
import { IoIosLogOut } from "react-icons/io";

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header>
            <Link className="site-logo" to="/">#VanJourney</Link>
            <nav>
                <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src={Image}
                        className="login-icon"
                    />
                </Link>
                
            <button className="logout-btn" onClick={fakeLogOut}>
                     <IoIosLogOut style={{ fontSize: '1.5em' }} />
            </button>
            </nav>
        </header>
    )
}