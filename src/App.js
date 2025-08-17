import React from "react";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Service from "./routes/Service";
import About from "./routes/About";
import Contact from "./routes/Contact";
import {Route , Routes } from "react-router-dom";

import SignUpForm from "./components/Register";
import SignUp from "./routes/SignUp";
import SearchBar from "./components/SearchBar";
import CityPage from "./components/CityPage";
import SingleArticle from "./components/SingleArticle";
import NewsPage from "./components/NewsData";
import AdminLoginPage from "./routes/AdminLoginPage";
import AdminNews from "./components/AdminAddNews";
import AdminDashboard from "./components/AdminDashboard";
import AdminAddNews from "./components/AdminAddNews";
import NewsDetail from "./components/NewsDetail";
import NewsList from "./components/NewsList";
import AdminContactMessages from "./components/AdminContactMessages";
 function App ()  {
    return (
        <div className="App">
            <Routes>
                <Route path ="/" element ={<Home/>}/>
                <Route path ="/about" element ={<About/>}/>
                <Route path ="/service" element ={<Service/>}/>
                <Route path ="/contact" element ={<Contact/>}/>
                <Route path ="/signup" element ={<SignUp/>}/>
                <Route path ="/admin-login" element ={<AdminLoginPage/>}/>
                <Route path ="/searchbar" element ={<SearchBar/>}/>
                <Route path="/admin/messages" element={<AdminContactMessages />} />
                <Route path="/city/:city" element={<CityPage />} />
                <Route path="/admin/news" element={<AdminAddNews />} />
                <Route path="/article/:slug" element={<SingleArticle />} />

                <Route path="/news" element={<NewsList />} />
                <Route path="/news/:id" element={<NewsDetail />} />

                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>






           // kjk testt
        </div>
    )
}
export default App ;
