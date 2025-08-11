import React from "react";
import "./BestExp.css";
import {motion } from "framer-motion";


import {Link, useParams} from "react-router-dom";

const experiencesByCity = {
    rome: [{
        category: "Culture",
        description: "Walk through centuries of history in Rome — from the mighty Colosseum to the elegant Pantheon. The city’s streets breathe ancient stories, Renaissance art, and awe-inspiring architecture.",
        attractions: [
            "Colosseum & Roman Forum tours",
            "Vatican Museums & Sistine Chapel",
            "Classical music at Teatro dell'Opera",
            "Ancient ruins & Renaissance churches"
        ]
    },
        {
            category: "Entertainment",
            description: "Rome offers unforgettable evenings filled with live music, open-air cinema, rooftop lounges, and street performances in charming piazzas.",
            attractions: [
                "Trastevere street musicians",
                "Summer cinema at Villa Borghese",
                "Rooftop bars with city views",
                "Open-air concerts and festivals"
            ]
        },
        {
            category: "Food",
            description: "From fresh pasta to creamy gelato, Roman food is pure joy. Try traditional dishes like Cacio e Pepe or Carbonara in a cozy trattoria, or explore buzzing food markets.",
            attractions: [
                "Local trattorias & pasta-making classes",
                "Roman-style pizza at Pizzarium",
                "Campo de' Fiori & Testaccio food markets",
                "Authentic gelato tasting"
            ]
        }


    ],
    barcelona: [{
        category: "Food",
        attractions: [
            "1. Colosseum - Iconic amphitheater of ancient Rome.",
            "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
            "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
            "4. Pantheon - Ancient Roman temple with an incredible dome.",
            "5. Piazza Navona - Lively square with fountains and cafes."
        ],
        description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
        ,

    },
        {
            category: "Culture",
            attractions: [
                "1. Colosseum - Iconic amphitheater of ancient Rome.",
                "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
                "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
                "4. Pantheon - Ancient Roman temple with an incredible dome.",
                "5. Piazza Navona - Lively square with fountains and cafes."
            ],
            description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
            ,

        }, {
            category: "Entertainment",
            attractions: [
                "1. Colosseum - Iconic amphitheater of ancient Rome.",
                "2. Vatican City - Home to St. Peter’s Basilica and the Sistine Chapel.",
                "3. Trevi Fountain - Famous Baroque fountain, make a wish!",
                "4. Pantheon - Ancient Roman temple with an incredible dome.",
                "5. Piazza Navona - Lively square with fountains and cafes."
            ],
            description: "Rome, the Eternal City, is a treasure trove of history, architecture, and culture. It's home to some of the world's most famous landmarks and offers an unforgettable experience for travelers."
            ,
        }


    ]

};

const CityExperience = () => {
    const { city } = useParams();
    const cityExp = experiencesByCity[city];

    if (!cityExp) {
        return <h2>City not found</h2>;
    }


    return (
        <div className="experience-grid">
            {cityExp.map((category, index) => (
                <div key={index} className="category-section">
                    {/* Category Title */}

                    <h2 className="category-title">{category.category}</h2>

                    {/* Category Description */}
                    <p className="category-description">{category.description}</p>

                    <div className="suggestion"><h4>Suggestions :</h4></div>


                    {/* List of Attractions */}
                    <ul className="attractions-list">
                        {category.attractions.map((attraction, i) => (
                            <li key={i} className="attraction-item">{attraction}</li>
                        ))}
                    </ul>




                </div>
            ))}
        </div>
    );
};
export default CityExperience;
