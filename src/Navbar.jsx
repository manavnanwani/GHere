import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-md-10 mx-auto">             
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <NavLink className="GH-nav" exact to="/">Gamble<span>Here</span></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active-link" className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active-link" className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active-link" className="nav-link" to="/signup">Sign Up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active-link" className="nav-link" to="/login">Login</NavLink>
                            </li>
                            
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
