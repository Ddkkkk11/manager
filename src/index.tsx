import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom/client';
import Router from './router';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router/>
    </React.StrictMode>
);
