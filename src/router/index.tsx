import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import { Demo } from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
                    <Route path='/demo' element={<Demo/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    )
}