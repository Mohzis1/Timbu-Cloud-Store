import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer style={{width:"100%"}} className="footer">
      <div className="footerFirst" style={{display:"flex", flexWrap: "wrap", height:"100%", justifyContent:"space-evenly", padding:"43px", backgroundColor:"#9BC4E0"}}>
        <div style={{padding:"40px"}}>
          <svg width="100" height="5"> 
      <line
        x1="0"
        y1="2.5"
        x2="100"
        y2="2.5"
        stroke="white"
        stroke-width="2"
      />
    </svg>
          <div style={{width:"177px", height:""}} >
            <p
              style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}
            >
            Privacy Policy
            </p>
            <p style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}> Terms & Condition </p>
              <p style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}>About</p>
          </div>
        </div>

        <div className="centerFooter" style={{textAlign:"center", }}>
          <p
            style={{
              fontFamily: "Plaster",
              color: "#F13E80",
              fontWeight: "400",
              fontSize: "32px",
            }}
          >
            Skinsphere
          </p>

          <div className="social-icons" style={{ justifyContent:"center", gap:"28px", display:"flex" }}>
            <a
              href="/"
              target=""
              style={{ width: "32px", height: "32px", color: "#000000" }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="/"
              target=""
              style={{ width: "32px", height: "32px", color: "#000000" }}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="/"
              target=""
              style={{ width: "32px", height: "32px", color: "#000000" }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div style={{marginTop:"134px" }} className="copyright">
            <p>&copy; 2024 Skinsphere</p>
          </div>
        </div>

        <div style={{padding:"40px"}}>
        <svg width="100" height="5"> 
      <line
        x1="0"
        y1="2.5"
        x2="100"
        y2="2.5"
        stroke="white"
        stroke-width="2"
      />
    </svg>
    <div>
            <p
              style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}
            >
            Shipping Info
            </p>
            <p style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}> Returns </p>
              <p style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}>Exchange</p>
                <p style={{
                fontFamily: "Petrona",
                fontWeight: "500",
                fontSize: "20px",
                }}>Contact</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
