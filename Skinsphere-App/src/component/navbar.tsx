import React from "react";
import styles from "./External styles/nabar.module.css"
import navItems  from "./External styles/nav-item.module.css"



interface NavbarProps {
  brand?: string; 
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={`${styles.navbar}`}>
     <div className={`${styles.container}`}>
      <div><h2 style={{fontFamily:"Plaster", color:"#F13E80", fontSize:"32px", fontWeight:"400" }}>S</h2></div>
      <div style={{display:"flex", width:"229px", gap:"32px",}}>

     <div className={`${navItems.storeItem}`}>
          <a href="/" className={`${navItems.linkcontainer}`}>
            Store
          </a>        
        </div>

        <div className={`${navItems.aboutItem}`}>
        <a href="/" className={`${navItems.linkcontainer}`}>
            About
          </a>
        </div>

        <div className={`${navItems.contactItem}`}>
        <a href="/" className={`${navItems.linkcontainer}`}>
            Contact
          </a>
          </div>
      </div>

          <div className={`${navItems.cartIcon}`}>
            <img src="./src/assets/Cart.svg" alt="cart icon" className={`${navItems.cartIconImg}`} />
           
          </div>
          </div>
          
     </nav>
  );
};

export default Navbar;
