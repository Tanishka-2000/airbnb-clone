import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import App from './App';
import './index.css';
import Root from './root/root';
import Home, {homeLoader} from './home/home';

const router = createBrowserRouter([
    {
        path: '/airbnb-clone',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
