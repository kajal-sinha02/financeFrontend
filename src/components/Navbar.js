import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-title">financeFlow</div>
            
            <div className={`navbar-items ${dropdownOpen ? 'open' : ''}`}>
                <a href="#why-financeflow" className="navbar-item">Why FinanceFlow</a>
                <a href="#charts" className="navbar-item">Charts</a>
                <a href="#services" className="navbar-item">Services</a>
                <a href="#contact" className="navbar-item">Contact</a>
            </div>
            <button className="navbar-button">Login</button>
            <button className="navbar-toggle" onClick={toggleDropdown}>
                ☰
            </button>
        </nav>
    );
};

export default Navbar;
