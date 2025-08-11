import React from "react";
import "./TravelTips.css";

const tips = [
    {
        title: "Before You Go",
        items: [
            "Research your destination — customs, currency, and local rules.",
            "Keep digital & paper copies of important documents.",
            "Pack smart, not heavy — choose versatile clothing.",
            "Check visa & vaccination requirements in advance.",
        ],
    },
    {
        title: "During Travel",
        items: [
            "Arrive early at the airport — especially for international flights.",
            "Keep essentials in your carry-on: meds, chargers, ID.",
            "Stay hydrated and stretch during long flights.",
        ],
    },
    {
        title: "At Your Destination",
        items: [
            "Be polite & respectful of local culture.",
            "Avoid tourist traps — ask locals for hidden gems.",
            "Use trusted transportation — avoid unlicensed taxis.",
        ],
    },
    {
        title: "Money & Safety",
        items: [
            "Notify your bank before traveling.",
            "Carry both cash and cards in separate places.",
            "Use a money belt or hidden pouch in crowded areas.",
        ],
    },
    {
        title: "Tech Tips",
        items: [
            "Download offline maps (Google Maps offline is great).",
            "Install helpful apps: translator, converter, transport.",
            "Buy a local SIM or eSIM for internet access.",
        ],
    },
    {
        title: "Bonus Tips",
        items: [
            "Trust your gut — your instincts are important.",
            "Don’t overplan — enjoy the moment.",
            "Take photos, but also be present in the experience.",
            "Learn how to say 'no' to persistent sellers.",
            "Travel insurance can save your trip when things go wrong.",
        ],
    },
];

function TravelTips() {
    return (
        <div className="tips-container">
            <h1 className="tips-title">🌍 Essential Travel Tips</h1>
            {tips.map((section, index) => (
                <div key={index} className="tips-section">
                    <h2 className="tips-section-title">{section.title}</h2>
                    <ul className="tips-list">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="tips-item">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default TravelTips;
