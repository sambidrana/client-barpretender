import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
=======
import Authentication from  './Sambid/Authentication'
>>>>>>> 95ef3ab0dec5e9e8e14ffdcfda266f278c7e24bc
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
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
    <Authentication />
>>>>>>> 95ef3ab0dec5e9e8e14ffdcfda266f278c7e24bc
  </React.StrictMode>,
)