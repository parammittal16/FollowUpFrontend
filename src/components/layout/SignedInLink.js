import React from 'react';
import { NavbarNav, NavItem, NavLink } from "mdbreact"; 

const SignedInLink = () => {
    return (
        <NavbarNav right>
        <NavItem active>
        <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem active>
        <NavLink to="/create-admin">Create Admin</NavLink>
        </NavItem>
        <NavItem active>
        <NavLink to="/logout">Log Out</NavLink>
        </NavItem>
        </NavbarNav>
    );
}

export default SignedInLink;