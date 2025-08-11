import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./searchBar.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const cities = ["Rome", "Barcelona", "Paris", "Berlin", "New York", "Dubai", "London","Tokyo"];

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    const handleCityClick = (city) => {
        window.location.href = `/city/${city.toLowerCase()}`; // Redirect to city page
    };

    return (
        <>
            <Navbar/>
            <div className="search-page">

            <h1 className="header">Where do you love to travel ?</h1>
                <h3 className="quote">Where ever you go , go with your HEART!</h3>
            <div className="search-container">
                <div className="search-box">
                    <FaSearch onClick={() => setShowDropdown(true)} className="icon" />
                    <input className="search-input"
                        type="text"
                        placeholder="Search a city..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setShowDropdown(true)}
                    />
                    <FaTimes onClick={() => setShowDropdown(false)} className="icon close-icon" />
                </div>


                {showDropdown && (
                    <ul className="dropdown">
                        {filteredCities.length > 0 ? (
                            filteredCities.map((city, index) => (
                                <li key={index} onClick={() => handleCityClick(city)}>
                                    {city}
                                </li>
                            ))
                        ) : (
                            <li className="no-results">No results found</li>
                        )}
                    </ul>
                )}


            </div>
            </div>
            <Footer/>


        </>
    );
};

export default SearchBar;

