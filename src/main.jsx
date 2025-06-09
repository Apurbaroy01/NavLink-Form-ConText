import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import About from './Components/Home/About/About';
import Props from './Components/Props/Props';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Error></Error> ,
    children: [
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/props",
        element:<Props></Props>,
      },
      {
        path: "/about",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
