import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portfolio from './Components/Portfolio.jsx';
import Index from './Components/Index.jsx';


const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/',
    element: <Index />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
