import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../containers/dashboard";
// APP > List
//Login

//面包屑
const breadcrumbNameMap: Record<string, string> = {

}
export default function BaseRouter () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/developers/game' element={<Home/>}></Route>
                    <Route path='/developers/game/create' element={<Home/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}