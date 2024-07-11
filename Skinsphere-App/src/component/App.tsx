import Navbar from "./navbar"
import SecondFrame from "./SecondFrame"
import SearchBar from "./SearchBar"
import ProductBars from "./ProductBars"

import CleanserProduct from "./CleanserProduct"
import SerumProduct from "./SerumProduct"
import MoisturizerProduct from "./MoisturizerProduct"
import FaceOilProduct from "./FaceOilProduct"
import Footer from "./Footer"



function App() {
  return (
    <>
    <div>
        <Navbar/>
        <SecondFrame/>
        <SearchBar/>
        <ProductBars/>
        <CleanserProduct/>
        <SerumProduct/>
        <MoisturizerProduct/>
        <FaceOilProduct/>
        <Footer/>
       
    </div>

    </>
    
  )
}

export default App