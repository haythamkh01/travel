// src/components/CityList.jsx
import "./MostVisited.css";

const cities = [
    { name: "Paris", visitors: 19100000, rating: 4.9 },
    { name: "Bangkok", visitors: 22700000, rating: 4.8 },
    { name: "London", visitors: 19000000, rating: 4.7 },
    { name: "Dubai", visitors: 16730000, rating: 4.6 },
    { name: "Singapore", visitors: 14500000, rating: 4.8 },
    { name: "Kuala Lumpur", visitors: 13800000, rating: 4.4 },
    { name: "New York", visitors: 13400000, rating: 4.7 },
    { name: "Istanbul", visitors: 13200000, rating: 4.5 },
    { name: "Tokyo", visitors: 12900000, rating: 4.9 },
    { name: "Seoul", visitors: 12200000, rating: 4.6 },
];

function MostVisited() {
    return (
        <div className="container">
            <h1>Top 10 Most Visited Cities</h1>
            <table>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Visitors</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {cities.map((city) => (
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

export default MostVisited;
