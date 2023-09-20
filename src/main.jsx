import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Projects from './Components/Projects.jsx';
import Index from './Components/Index.jsx';
import Contact from './Components/Contact.jsx';
import SoundVault from './Components/SoundVault.jsx';
import MagicEightBall from './Components/MagicEightBall.jsx';
import About from './Components/About.jsx';
import TuneTycoon from './Components/TuneTycoon.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/SoundVault',
    element: <SoundVault />
  },
  {
    path: '/MagicEightBall',
    element: <MagicEightBall />
  },
  {
    path: '/TuneTycoon',
    element: <TuneTycoon />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
