import React , {useState} from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import {MenuItems} from "./menuItems";
import "./NavbarStyles.css";
import AdminUnreadBadge from "./AdminUnreadBadge";
function Navbar() {
    const name = localStorage.getItem('userName');
    const role = localStorage.getItem('userRole');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem("lastScore")
        localStorage.removeItem("userId")
        navigate('/');
    };



    return (
        <nav className="NavbarItems">

            <h1 className="navbar-logo">Wander Quest</h1>


            <ul className="nav-menu">
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="navbar-right">
                {name && (
                    <>
                        <span className="navbar-welcome">👋 Welcome, <strong>{name}</strong></span>

                        <div className="admin-links">
                            <Link className="navbar-dashboard" to="/admin">
                                Admin Dashboard
                            </Link>
                            <a href="/admin/messages" className="nav-item">
                                Messages <span className="badge">2</span>
                            </a>
                        </div>


                        <button onClick={handleLogout} className="navbar-logout">Logout</button>
                    </>
                )}

                {!name && (
                    <>
                        <Link className="navbar-dashboard" to="/admin-login">Login</Link>
                        <Link className="navbar-dashboard" to="/register">Register</Link>
                    </>
                )}
            </div>


        </nav>
    );
}

export default Navbar;
