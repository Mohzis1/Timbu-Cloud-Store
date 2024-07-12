import styles from "./External styles/cleanserpro.module.css";
import FaceOil1Img from "../assets/FaceOil1.png";
import FaceOil2Img from "../assets/FaceOil2.png";
import ProductListingText4 from "../component/ProductListingText4.tsx";
import CartButton from "../component/CartButton.tsx";

function FaceOilProduct() {
  return (
    <section>
      <ProductListingText4 />
      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil1Img}
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
            <CartButton />
          </div>
        </div>

        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil2Img}
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
            <CartButton />
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil1Img}
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
            <CartButton />
          </div>
        </div>
      </div>

      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil2Img}
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
            <CartButton />
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil1Img}
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
            <CartButton />
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil2Img}
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
            <CartButton />
          </div>
        </div>
      </div>

      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil1Img}
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
            <CartButton />
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil2Img}
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
            <CartButton />
          </div>
        </div>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={FaceOil1Img}
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
            <CartButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaceOilProduct;
