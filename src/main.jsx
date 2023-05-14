import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import LogIn from './routes/LogIn';
import CreateAcc from './routes/CreateAcc';
import CocktailsList from './routes/CocktailsList';
import Cocktail from './routes/Cocktail';
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/create_account",
        element: <CreateAcc />,
      },
    ],
  },
  {
    path: "/cocktails_list",
    element: <CocktailsList />,
  },
  {
    path: "/cocktail/",
    element: <Cocktail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)