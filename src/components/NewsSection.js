import React from 'react';
import { Link } from 'react-router-dom';
import newsArticles from "./NewsData";
import './NewsSection.css';

const NewsSection = () => {
    return (
        <>
            <div className="header-news-section">
            <h2 >Travel News</h2>
        </div>
            <div className="news-section">

                <div className="news-cards">
                    {newsArticles.map((article) => (
                        <Link to={`/article/${article.slug}`} key={article.slug} className="news-card">
                            <img src={article.image} alt={article.title}/>
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NewsSection;