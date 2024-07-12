import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './component/App';
import Cleanser from './component/CleanserProduct.tsx';
import Serum from './component/SerumProduct.tsx';
import Moisturizer from './component/MoisturizerProduct.tsx';
import FaceOil from './component/FaceOilProduct.tsx';
import Navbar from "./component/navbar.tsx";
import Footer from "./component/Footer.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx"
import AllProduct from "./layouts/AllProduct.tsx"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<AllProduct />} />

      <Route path='cleanser' element={<Cleanser />} />
      <Route path='serum' element={<Serum />} />
      <Route path='moisturizer' element={<Moisturizer />} />
      <Route path='face-oil' element={<FaceOil />} />


      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
