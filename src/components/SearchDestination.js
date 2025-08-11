import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDestination.css";

function SearchDestination() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/searchbar"); // or your actual URL
    };

    return (
        <div className="search-destination-container">
            <h1 className="search-heading">Ready to Discover Your Next Destination With Us?</h1>
            <button className="search-button" onClick={handleClick}>
                Start Searching
            </button>
        </div>
    );
}

export default SearchDestination;
