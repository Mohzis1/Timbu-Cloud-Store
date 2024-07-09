import React from "react";
import styles from "./External styles/nabar.module.css"
import navItems  from "./External styles/nav-item.module.css"


// Interface for optional props
interface NavbarProps {
  brand?: string; // Optional brand name for the navbar
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={`${styles.navbar}`}>
     <div className={`${styles.container}`}>
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

          <div className={`${navItems.cartIcon}`}>
            <img src="./src/assets/Cart.svg" alt="cart icon" className={`${navItems.cartIconImg}`} />
           
          </div>
          </div>
          
     </nav>
  );
};

export default Navbar;
