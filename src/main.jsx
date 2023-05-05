import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main.jsx';
import Home from './components/Home/Home.jsx';
import MasterViewDetails from './components/MasterViewDetails/MasterViewDetails.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './router/PrivateRoute.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Blog from './components/Blog/Blog.jsx';
import NotFound from './components/NotFound/NotFound.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login></Login>,       

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: 'masterViewDetails/:id',
        element: <PrivateRoute><MasterViewDetails></MasterViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://client-side-smshaown.vercel.app/chefDetails/${params.id}`)
      }  
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
  
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  
 </AuthProvider>,
)
