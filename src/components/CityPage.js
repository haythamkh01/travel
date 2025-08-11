import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//import "./searchBar.css" ;
import Colosseum from "../assets/a.jpg"
import VaticanCity from "../assets/b.jpg"
import TreviFountain from "../assets/c.jpg"
import Pantheon from "../assets/d.jpeg"
import Rome from "../assets/g.jpg"
import PiazzaNavona from "../assets/plaza-navona1.jpg"
import "./cityPage.css";

import CityExperience from "./CityExperience";
import Navbar from "./Navbar";

const cityData = {
    rome: {
        name: "Rome",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Colosseum" },
            { id: 2, image:VaticanCity, name: "Vatican City" },
            { id: 3, image:TreviFountain, name: "Trevi Fountain" },
            { id: 4, image:Pantheon, name: "Pantheom" },
            { id: 5, image:PiazzaNavona, name: "Piazza Navona" }

        ],
        paraPic : Rome,


    },
    barcelona: {
        name: "Barcelona",
        attractions: [
            "Sagrada Familia - Gaudí’s masterpiece church.",
            "Park Güell - Colorful park with unique architecture.",
            "La Rambla - A lively boulevard filled with street performers.",
            "Casa Batlló - Stunning modernist building by Gaudí.",
            "Barceloneta Beach - Perfect for relaxation and sunbathing."
        ],
        description: "Barcelona is a vibrant city known for its art, beaches, and stunning architecture. It’s a perfect blend of history and modern attractions."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Sagrada Familia" },
            { id: 2, image:VaticanCity, name: "Park Güell" },
            { id: 3, image:TreviFountain, name: "La Rambla" },
            { id: 4, image:Pantheon, name: "Casa Batlló" },
            { id: 5, image:PiazzaNavona, name: "Barceloneta Beach" }

        ],
        paraPic : Rome,
    },
    paris: {
        name: "Paris",
        attractions: [
            "Eiffel Tower - The symbol of France and a must-see attraction.",
            "Louvre Museum - Home to the Mona Lisa and countless artworks.",
            "Notre-Dame Cathedral - Famous Gothic cathedral with stunning architecture.",
            "Champs-Élysées - Iconic avenue leading to the Arc de Triomphe.",
            "Seine River Cruises - A romantic way to explore Paris."
        ],
        description: "Paris, the City of Light, is famous for its art, fashion, and romantic ambiance. It's one of the world's top travel destinations."

        , image: [
            {id: 1, image: Colosseum, name: "Eiffel Tower"},
            {id: 2, image: VaticanCity, name: "Louvre Museum"},
            {id: 3, image: TreviFountain, name: "Notre-Dame Cathedral"},
            {id: 4, image: Pantheon, name: "Champs-Élysées"},
            {id: 5, image: PiazzaNavona, name: "Seine River Cruises"}

        ],
        paraPic: Rome,
    },
    berlin: {
        name: "Berlin",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Colosseum" },
            { id: 2, image:VaticanCity, name: "Vatican City" },
            { id: 3, image:TreviFountain, name: "Trevi Fountain" },
            { id: 4, image:Pantheon, name: "Pantheom" },
            { id: 5, image:PiazzaNavona, name: "Piazza Navona" }

        ],
        paraPic : Rome,


    },
    "new york": {
        name: "New York",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Colosseum" },
            { id: 2, image:VaticanCity, name: "Vatican City" },
            { id: 3, image:TreviFountain, name: "Trevi Fountain" },
            { id: 4, image:Pantheon, name: "Pantheom" },
            { id: 5, image:PiazzaNavona, name: "Piazza Navona" }

        ],
        paraPic : Rome,


    },
    dubai: {
        name: "Dubai",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Colosseum" },
            { id: 2, image:VaticanCity, name: "Vatican City" },
            { id: 3, image:TreviFountain, name: "Trevi Fountain" },
            { id: 4, image:Pantheon, name: "Pantheom" },
            { id: 5, image:PiazzaNavona, name: "Piazza Navona" }

        ],
        paraPic : Rome,


    },
    tokyo :{
        name: "Dubai",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,
        image :[
            { id: 1, image: Colosseum, name: "Colosseum" },
            { id: 2, image:VaticanCity, name: "Vatican City" },
            { id: 3, image:TreviFountain, name: "Trevi Fountain" },
            { id: 4, image:Pantheon, name: "Pantheom" },
            { id: 5, image:PiazzaNavona, name: "Piazza Navona" }

        ],
        paraPic : Rome,


    },
};

const CityPage = () => {
    const { city } = useParams();
    const cityInfo = cityData[city];

    if (!cityInfo) {
        return <h2>City not found</h2>;
    }

    return (
        <>
            <Navbar/>
        <div className="city-page">
            <h1>{cityInfo.name}</h1>
            <div className="para-top-pic">
                <div className="para-top">
                    <p>{cityInfo.description}</p>

                    <div>
                        <h3 className="top-attraction">Top Attractions:</h3>
                        <ul>
                            {cityInfo.attractions.map((place, index) => (
                                <li key={index}>{place}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="pic-city">
                    <img src={cityInfo.paraPic} alt={cityInfo.name}/>
                    <h3>{cityInfo.name}</h3>
                </div>
            </div>
            <div className="city-gallery">
                {cityInfo.image.map((city) => (
                    <div key={city.id} className="city-card">
                        <img src={city.image} alt={city.name}/>
                        <h3>{city.name}</h3> {/* City name below image */}
                    </div>
                ))}
            </div>
            <CityExperience/>
            <Link  to="/searchbar">Go Back</Link>
        </div>
            </>
    );
};

export default CityPage;
