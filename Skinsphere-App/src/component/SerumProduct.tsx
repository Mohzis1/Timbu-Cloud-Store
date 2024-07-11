import styles from "./External styles/cleanserpro.module.css";
import serum1Img from "../assets/Serum1.png";
import serum2Img from "../assets/Serum2.png";
import ProductListingText2 from "../component/ProductListingText2.tsx";
import  CartButton from "../component/CartButton.tsx";


function SerumProduct() {
  return (
    <section>
        <ProductListingText2/>
      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum1Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>

        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum2Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum1Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
      </div>

      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum2Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum1Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum2Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
      </div>

      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum1Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum2Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={serum1Img}
            alt="Cleanser Product"
            className={styles.imgcleanserpro}
          />
          <div className={`${styles.cleanserDetail}`}>
            <div>
              <h2
                style={{
                  fontFamily: "Petrona",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                La Rosay Sunscreen set
              </h2>
              <p className={`${styles.productPrice}`}>#52,000</p>
            </div>
           <CartButton/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SerumProduct;
