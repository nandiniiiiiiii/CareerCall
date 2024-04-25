import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Desktop1 from './pages/Desktop1';
import Desktop2 from './pages/Desktop2';
import Desktop3 from './pages/Desktop3';
import Desktop4 from './pages/Desktop4';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Desktop2', element: <Desktop2 /> },
{ path: '/Desktop3', element: <Desktop3 /> },
{ path: '/Desktop4', element: <Desktop4 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}