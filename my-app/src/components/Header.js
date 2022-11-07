import React from 'react'
import { Link } from 'react-router-dom';
import './Style.css';

export default function Header() {
  return (
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-5">
                    <li className="nav-item me-10">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about"  className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/faq">FAQs</Link>
                    </li>
                </ul>
            </div>
            <a className="login-btn me-5 ms-5" href="/">Sign In</a>
        </div>

    </nav>
    </div>
    
  )
}
