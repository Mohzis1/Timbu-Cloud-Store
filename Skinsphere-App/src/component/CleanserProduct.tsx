import styles from "./External styles/cleanserpro.module.css";
import cleanser1Img from "../assets/cleanser1.png";
import cleanser2Img from "../assets/cleanser2.png";
import ProductListingText from "../component/ProductListingText.tsx";
import CartButton from "../component/CartButton.tsx";

function CleanserProduct() {
  return (
    <section>
      <ProductListingText />
      <div className={`${styles.cleanserproItem}`}>
        <div className={`${styles.cleanserproItem2}`}>
          <img
            src={cleanser1Img}
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
            src={cleanser2Img}
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
            src={cleanser1Img}
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
            src={cleanser2Img}
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
            src={cleanser1Img}
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
            src={cleanser2Img}
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
            src={cleanser1Img}
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
            src={cleanser2Img}
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
            src={cleanser1Img}
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

export default CleanserProduct;
