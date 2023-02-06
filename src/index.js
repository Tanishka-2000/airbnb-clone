import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from './App';
import './index.css';
import Root from './root/root';

const router = createBrowserRouter([
    {
        path: '/airbnb-clone',
        element: <Root />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
