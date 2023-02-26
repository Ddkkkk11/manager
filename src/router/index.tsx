import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import { Students } from "../pages/Students";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../containers/dashboard";
import Stream from "../containers/stream";
import Announcement from "../pages/Announcement";
// APP > List
//Login


export default function BaseRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<App/>}>
                    <Route path='/home/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/home/person' element={<Students/>}></Route>
                    <Route path='/home/seat' element={<Stream/>}></Route>
                    <Route path='/home/announcement' element={<Announcement/>}></Route>
                </Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}
