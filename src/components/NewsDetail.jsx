import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./News.css";

export default function NewsDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    useEffect(() => {
        (async () => {
            setLoading(true); setErr("");
            try {
                const res = await fetch(`http://localhost:8080/api/news/${id}`);
                if (!res.ok) throw new Error(await res.text());
                const json = await res.json();
                setItem(json);
            } catch (e) {
                setErr(String(e.message || e));
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    if (loading) return <div className="news-wrap">Loading...</div>;
    if (err) return <div className="news-wrap">Error: {err}</div>;
    if (!item) return null;

    return (
        <div className="news-wrap">
            <Link to="/news" className="back-link">← Back to all news</Link>
            <article className="news-detail">
                <h1>{item.title}</h1>
                <div className="news-date">{new Date(item.createdAt).toLocaleString()}</div>
                {item.imageUrl && <img className="hero" src={`http://localhost:8080${item.imageUrl}`} alt={item.title} />}
                <div className="news-content">{item.content}</div>
            </article>
        </div>
    );
}
