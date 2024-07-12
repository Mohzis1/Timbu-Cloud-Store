import Navbar from "./navbar.tsx";
import SecondFrame from "./SecondFrame.tsx";;
import SearchBar from "./SearchBar.tsx";
import ProductBars from "./ProductBars.tsx";
import Footer from "./Footer.tsx";
import React from 'react';
import { Outlet } from 'react-router-dom';





function App() {
  return (
    <>
    <div>
        <Navbar/>
        <SecondFrame/>
        <SearchBar/>
        <ProductBars/>
        <Outlet /> 
        <Footer/>
       
    </div>

    </>
    
  )
}

export default App