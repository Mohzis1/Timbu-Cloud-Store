import productBars from "./External styles/product-bars.module.css"
import { Link } from 'react-router-dom';

function ProductBars() {
  return (
    <div className={`${productBars.productContainer}`}>
      <Link to="/"><button  className={`${productBars.productBarsOne}`}>All</button></Link>

      <Link to="/cleanser"><button  className={`${productBars.productBarsTwo}`}>Cleanser</button> </Link>
      <Link to="/serum"><button className={`${productBars.productBarsThree}`}>Serum</button></Link>
      <Link to="/moisturizer"><button className={`${productBars.productBarsFour}`}>Moisturizer</button></Link>
      <Link to="/faceoil"><button className={`${productBars.productBarsFive}`}>Face oil</button></Link>
    </div>
  );
}

export default ProductBars;
