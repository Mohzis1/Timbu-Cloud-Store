import productBars from "./External styles/product-bars.module.css"

function ProductBars() {
  return (
    <div className={`${productBars.productContainer}`}>
      <button  className={`${productBars.productBarsOne}`}>All</button>

      <button  className={`${productBars.productBarsTwo}`}>Cleanser</button>
      <button className={`${productBars.productBarsThree}`}>Serum</button>
      <button className={`${productBars.productBarsFour}`}>Moisturizer</button>
      <button className={`${productBars.productBarsFive}`}>Face oil</button>
    </div>
  );
}

export default ProductBars;
