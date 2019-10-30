import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
    <nav className="navbar">
        <ul className="navbar__ul">
            <NavLink className="navbar__link" to="/">Apollo</NavLink>
            <NavLink className="navbar__link" to="/contacts">Contacts</NavLink>
        </ul>
    </nav>
);

