import React from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

const navbar = (props) => (

    <nav className="navbar navbar-expand-sm bg-faded justify-content-center">

        <ul className="navbar-nav">
            <li className="nav-item ">
                <NavLink to="/" exact activeClassName="nav-link btn">Home</NavLink>
            </li>
            <li className="nav-item">

                <NavLink
                    to="/cards"
                    activeStyle={{
                    textDecoration: 'none'
                }}
                    activeClassName="nav-link btn">Show Cards</NavLink>

                {/* <a className="nav-link btn" NavLink={}>Show Cards</a> */}
            </li>
        </ul>
    </nav>
);
export default navbar;