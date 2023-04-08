import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/HomeLayout/Home';
import Shop from './Component/Shop/Shop';
import Order from './Component/Orders/Order';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import cartProductLoaders from './Component/CustomLoder/Loder';



let route =createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,

    children:([
      {
        path:"/",
        element: <Shop></Shop>
      },
      {
        path:"order",
        element: <Order></Order>,
        loader: cartProductLoaders 
      },
      {
        path:"manage",
        element: <Inventory></Inventory>
      },
      {
        path:"login",
        element: <Login></Login>
      },

    ])

  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
