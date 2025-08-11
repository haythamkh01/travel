import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/AdminNews.css'; // You can style this as needed

function AdminNews() {
    const [newsList, setNewsList] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        imageUrl: ''
    });
    const [message, setMessage] = useState('');

    const token = localStorage.getItem('token');

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        const res = await axios.get('http://localhost:8080/api/news/all');
        setNewsList(res.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/news/add', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage('🟢 News added successfully!');
            setFormData({ title: '', content: '', imageUrl: '' });
            fetchNews();
        } catch (error) {
            setMessage('🔴 Failed to add news');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/news/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchNews();
        } catch (error) {
            alert('Error deleting news');
        }
    };

    return (
        <div className="admin-news">
            <h2>📰 Admin News Panel</h2>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" />
                <textarea name="content" value={formData.content} onChange={handleChange} placeholder="Content" required />
                <button type="submit">Add News</button>
            </form>

            <h3>📋 Existing News</h3>
            <ul>
                {newsList.map(news => (
                    <li key={news.id}>
                        <h4>{news.title}</h4>
                        <p>{news.content}</p>
                        {news.imageUrl && <img src={news.imageUrl} alt="news" width="100" />}
                        <button onClick={() => handleDelete(news.id)}>🗑️ Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminNews;
