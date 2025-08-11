
import "./CitySelector.css";

import { useState } from "react";
import { cities } from "./CityData";


const filters = ["mostVisited", "family", "honeymoon"];

function CitySelector() {
    const [selected, setSelected] = useState("mostVisited");

    const filteredCities = cities.filter((city) =>
        city.tags.includes(selected)
    );

    return (
        <div className="container">
            <h1>Explore Cities</h1>

            <div className="options">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={selected === filter ? "active" : ""}
                        onClick={() => setSelected(filter)}
                    >
                        {filter === "mostVisited"
                            ? "Most Visited"
                            : filter === "family"
                                ? "Family Friendly"
                                : "Honeymoon"}
                    </button>
                ))}
            </div>

            <table>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Visitors</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {filteredCities.map((city) => (
                    <tr key={city.name}>
                        <td>
                            <a
                                href={`/city/${city.name.toLowerCase()}`}
                                className="city-link"
                            >
                                {city.name}
                            </a>
                        </td>
                        <td>{city.visitors.toLocaleString()}</td>
                        <td>⭐ {city.rating}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CitySelector;
