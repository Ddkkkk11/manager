import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../containers/dashboard";
import Stream from "../containers/stream";
// APP > List
//Login

//面包屑
const breadcrumbNameMap: Record<string, string> = {

}
export default function BaseRouter () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/home' element={<App/>}>
                    <Route path='/home/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/home/demo1/child1' element={<Home/>}></Route>
                </Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}
