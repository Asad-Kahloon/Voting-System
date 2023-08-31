import React from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ">
                <div className="container py-2">
                    <Link className="navbar-brand link" to="/"><h2>EVS</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* means */}
                    <div className="collapse navbar-collapse align-middle" id="navbarNav">
                        <ul className="navbar-nav ms-auto nav_ul align-items-center">
                            
                            <li className="nav-item ">
                            <Link className="nav-link link" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/about">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link to="/" className="dropdown-item link">Action</Link></li>
                                    <li><Link to="/" className="dropdown-item link" >Another action</Link></li>
                                    <li><Link to="/" className="dropdown-item link" >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link link" to="/contact">Contact Us</Link>
                            </li>
                            <div className="mx-3">
                                <Link to="/login"><button type="button" className="nav-btns ">Login</button></Link>
                                <Link to="/signup"><button type="button" className="nav-btns mx-2 ">Sign Up</button></Link>
                            </div>
                        </ul>
                    </div>
                    {/* end */}
                </div>
            </nav>
        </>
    )
}

export default Navbar