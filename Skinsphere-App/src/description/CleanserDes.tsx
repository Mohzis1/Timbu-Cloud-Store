import cleanser1Img from "../assets/Serum1.png";
import styles from "./External styles/cleanserpro.module.css";

function CleanserDes() {
  return (
    <div>
      <div>
        <div>
          <h2>Cart</h2>
        </div>

        <div>
          <div>
            <img
              src={cleanser1Img}
              alt="Cleanser Product"
              className={styles.imgcleanserpro}
            />
          </div>
          <div style={{gap:"36px", width:"575px", height:"382px" }}>
            <p style={{fontFamily:"Petrona", fontSize:"32px",}}>La Rosay Sunscreen set</p>
            <p style={{fontWeight:"400px", fontSize:"20px", alignContent:"center", lineHeight:"22.56px"}}>
              Each formulation is crafted with care using the finest ingredients
              to ensure your complexion feels radiant and rejuvenated.
            </p>
            <p style={{fontWeight:"700px",}}>#55000</p>
            <button></button>
            <div style={{height:"71px", display:"flex", justifyContent:"center"}}>
              <button style={{width:"145px", height:"44px", borderRadius:"24px",border:"2px",padding:"24px 48px, 24px, 48px",gap:"10px", backgroundColor:"#FFFFFF", color:"#578BAD"}}>Add to cart</button> 
              <button style={{width:"145px", height:"71px", borderRadius:"24px",border:"2px",padding:"24px 48px, 24px, 48px",gap:"10px", backgroundColor:"#578BAD", color:"#FFFFF"}}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleanserDes;
