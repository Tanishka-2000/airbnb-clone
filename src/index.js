import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
// import App from './App';
import './index.css';
import Root from './root/root';
import Home, {homeLoader} from './home/home';
import Details, {hotelLoader} from './components/details/Details';
// import SkeletonHomePage from './skeletonHomePage/skeletonHomePage';
// import SkeletonDetailsPage from './components/details/utilities/skeletonDetailsPage';
const router = createBrowserRouter([
    {
        path: '/airbnb-clone',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader
            },
            {
                path: 'hotels/:hotelId',
                element: <Details />,
                loader: hotelLoader
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <RouterProvider router={router} />
    // <SkeletonHomePage />
    // <SkeletonDetailsPage />
);
