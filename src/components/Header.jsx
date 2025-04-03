import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Header.css'; // Adjust the path if necessary

const Header = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State to manage search input
    const [showSearch, setShowSearch] = useState(false); // State to toggle search bar visibility
    const searchRef = useRef(null); // Reference to the search container

    // Logout handler
    const handleLogout = () => {
        console.log("User logged out");
        localStorage.removeItem('user'); // Clear user data from localStorage
        window.location.href = "/login"; // Redirect to login page
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            console.log("Searching for:", searchQuery);
            // Redirect to the search results page with the query as a parameter
            window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
        } else {
            alert("Please enter a search term.");
        }
    };

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSearch(false); // Close the search bar
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="navBar">
            <nav className="navLeft">
                <ul>
                    <li><Link to="/home">Home</Link></li> {/* Use Link instead of <a> */}
                    <li>
                        <a href="#">Series ▼</a>
                        <ul className="dropdown">
                            <li><Link to="/cdrama">C-DRAMA</Link></li>
                            <li><Link to="/kdrama">K-DRAMA</Link></li>
                            <li><Link to="/hollywood">HOLLYWOOD</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/about-us">About us</Link></li>
                </ul>
            </nav>
            <Link to="/home">
                <img className="logo" src="/images/Logo.png" alt="Website Logo" />
            </Link>
            <div className="navRight">
                <ul>
                    <li>
                        {/* Search Icon */}
                        {!showSearch && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="searchIcon"
                                onClick={toggleSearch} // Toggle search bar on click
                                style={{ cursor: "pointer" }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 2a9 9 0 0 1 9 9c0 1.043-.185 2.052-.513 2.972l4.533 4.533a1 1 0 0 1-1.414 1.414l-4.533-4.533A8.97 8.97 0 0 1 11 20a9 9 0 1 1 0-18z"
                                />
                            </svg>
                        )}

                        {/* Search Bar */}
                        {showSearch && (
                            <div className="search-container" ref={searchRef}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="search-input"
                                />
                                <button className="search-button" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        )}
                    </li>
                    <li className="su"><Link to="/signup">Sign Up</Link></li> {/* Updated to use Link */}
                    <li>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;