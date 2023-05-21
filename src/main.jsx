import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './css/style.css'
import Root from './routes/root';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Admin from './components/Admin/Admin';
import CocktailsList from './routes/CocktailsList';
import Cocktail from './routes/Cocktail';
import Sambid from './routes/Sambid';
import Maggie from './routes/Maggie';
import Akiko from './routes/Akiko';
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  // >>>>>>>>> Below routes are from develop and debugging purpose only
  {
    path: "/cocktails_list",
    element: <CocktailsList />,
  },
  {
    path: "/cocktail/",
    element: <Cocktail />,
  },
  {
    path: "/sambid/",
    element: <Sambid />,
  },
    {
    path: "/maggie/", 
    element: <Maggie />,
  },
  {
    path: "/akiko/",
    element: <Akiko />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)