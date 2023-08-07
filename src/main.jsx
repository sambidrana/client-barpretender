import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import Admin from './routes/Admin';
// import Sambid from './routes/Sambid'; // Dev use only
// import Maggie from './routes/Maggie'; // Dev use only
// import Akiko from './routes/Akiko'; // Dev use only
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
  // {
  //   path: "/cocktails_list",
  //   element: <CocktailsList />,
  // },
  // {
  //   path: "/cocktail/",
  //   element: <Cocktail />,
  // },
  // {
  //   path: "/sambid/",
  //   element: <Sambid />,
  // },
  //   {
  //   path: "/maggie/", 
  //   element: <Maggie />,
  // },
  // {
  //   path: "/akiko/",
  //   element: <Akiko />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)