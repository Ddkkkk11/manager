import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
// import 'antd/dist/reset.css';
import Router from './router';
import App from "./App"
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);
