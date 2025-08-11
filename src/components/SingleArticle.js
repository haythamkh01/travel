import React from 'react';
import { useParams } from 'react-router-dom';
import newsArticles from './NewsData';
import './SingleArticle.css';

const SingleArticle = () => {
    const { slug } = useParams();
    const article = newsArticles.find((a) => a.slug === slug);

    if (!article) return <h2 className="not-found">Article not found 😢</h2>;

    return (
        <div className="single-article-container">
            <h1 className="single-article-title">{article.title}</h1>
            <img src={article.image} alt={article.title} className="single-article-image" />

            <p className="single-article-content">{article.content}</p>
        </div>
    );
};

export default SingleArticle;