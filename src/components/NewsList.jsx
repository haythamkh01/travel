import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ added useNavigate
import "./News.css";

export default function NewsList() {
    const navigate = useNavigate(); // ⬅️
    const [page, setPage] = useState(0);
    const [size] = useState(6);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");

    // Simple check — tweak to your logic if needed
    const isAdmin =
        localStorage.getItem("userRole") === "ADMIN" ||
        !!localStorage.getItem("adminToken");

    useEffect(() => {
        (async () => {
            setLoading(true); setErr("");
            try {
                const res = await fetch(`http://localhost:8080/api/news/all?page=${page}&size=${size}`);
                if (!res.ok) throw new Error(await res.text());
                const json = await res.json();
                setData(json);
            } catch (e) {
                setErr(String(e.message || e));
            } finally {
                setLoading(false);
            }
        })();
    }, [page, size]);

    if (loading) return <div className="news-wrap">Loading...</div>;
    if (err) return <div className="news-wrap">Error: {err}</div>;
    if (!data) return null;

    return (
        <div className="news-wrap">
            <h2>Latest News</h2>
            <div className="news-grid">
                {data.content.map(item => (
                    <article key={item.id} className="news-card">
                        {item.imageUrl && <img src={`http://localhost:8080${item.imageUrl}`} alt={item.title} />}
                        <div className="news-card-body">
                            <h3 className="news-title">
                                <Link to={`/news/${item.id}`}>{item.title}</Link>
                            </h3>
                            <div className="news-date">
                                {new Date(item.createdAt).toLocaleString()}
                            </div>
                            <p className="news-excerpt">
                                {item.content.length > 160 ? item.content.slice(0,160) + "..." : item.content}
                            </p>
                            <Link className="news-read" to={`/news/${item.id}`}>Read more →</Link>
                        </div>
                    </article>
                ))}
            </div>

            <div className="news-pager">
                <button disabled={data.first} onClick={() => setPage(0)}>« First</button>
                <button disabled={data.first} onClick={() => setPage(p => Math.max(0, p-1))}>‹ Prev</button>
                <span>Page {data.number + 1} / {data.totalPages || 1}</span>
                <button disabled={data.last} onClick={() => setPage(p => p + 1)}>Next ›</button>
                <button disabled={data.last} onClick={() => setPage(data.totalPages - 1)}>Last »</button>
            </div>

            {isAdmin && (
                <button
                    className="fab-add"
                    aria-label="Add news"
                    onClick={() => navigate("/admin/news")} // change if your route differs
                >
                    +
                </button>
            )}
        </div>
    );
}
