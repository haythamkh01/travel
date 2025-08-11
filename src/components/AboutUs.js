import React from 'react';
import './AboutUsStyles.css'; // CSS is below

const AboutUs = () => {
    return (
       <>
            <div className="about-hero">
            <h1 className="about-title">About Us</h1>
            <p className="about-intro">
                Travel is more than a destination — it’s a story. We help you discover the best cities, hidden gems,
                and unforgettable experiences around the world.
            </p>
            </div>
            <div className="about-container">
            <section className="about-section">
                <h2>Our Mission</h2>
                <p>
                    To inspire and guide travelers in creating meaningful, exciting, and stress-free journeys.
                    Whether you're planning with your family or dreaming of your next solo adventure, we’ve got your back.
                </p>
            </section>

            <section className="about-section">
                <h2>Why Travel With Us?</h2>
                <ul className="about-list">
                    <li>🏙️ Curated lists of top-rated cities and experiences</li>
                    <li>🗺️ Hidden spots only locals know</li>
                    <li>✍️ Honest travel tips and user insights</li>
                    <li>🌐 Simple and friendly design</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>Our Story</h2>
                <p>
                    Founded by travelers, for travelers. We created this platform to simplify planning and make exploring
                    the world feel easy and exciting.
                </p>
            </section>

            <div className="about-cta">
                <h2>Ready to Explore?</h2>
                <p>Check out our top cities or search your dream destination now.</p>
                <button className="about-button">Start Exploring</button>
            </div>
        </div>
           </>
    );
};

export default AboutUs;
