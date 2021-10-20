import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            {/* Manu Bar Start.. */}
            <div>
                <nav className="sticky-top navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/home">Noble Cure</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/all-services">ALL-Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/doctors">ALL-Doctors</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogs">Blogs</Link>
                                </li>
                                {
                                    user.email ?

                                        <button onClick={logOut} type="button" class="btn btn-outline-secondary">LogOut</button>
                                        :
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>}

                                {user.email && <span style={{ color: 'aqua' }}>Hello {user.displayName} </span>}
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li> */}

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;