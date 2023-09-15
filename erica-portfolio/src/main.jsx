import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from './Components/Projects.jsx';
import Index from './Components/Index.jsx';
import Contact from './Components/Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/Contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
