import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import './index.css';
import Root from './components/root/root';
import Home, {homeLoader} from './components/home/home';
import Details, {hotelLoader} from './components/details/Details';
import Favourite, {favouriteAction} from './components/favourite/favourite';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: 'places/:placeName',
                element: <Home />,
                loader: homeLoader
            },
            {
                path: 'hotels/:hotelId',
                element: <Details />,
                loader: hotelLoader
            },
            {
                path: 'favourite',
                element: <Favourite />,
                action: favouriteAction
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);


// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",