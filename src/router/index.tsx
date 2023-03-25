import React from "react";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "../App";
import Students from "../pages/Students";
import Login from "../pages/Login";
import Dashboard from "../containers/dashboard";
import Stream from "../containers/stream";
import Announcement from "../pages/Announcement";
import Register from "../pages/Register";
import Comment from "../pages/Comment";


export default function BaseRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Navigate to="/login"/>}></Route>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/person' element={<Students/>}></Route>
                    <Route path='/seat' element={<Stream/>}></Route>
                    <Route path='/announcement' element={<Announcement/>}></Route>
                    <Route path='/comment' element={<Comment/>}></Route>
                </Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}
