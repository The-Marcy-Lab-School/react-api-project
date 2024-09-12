import { useState } from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };

    const removeActive = () => {
      setIsActive(false)
    }

    return (
      <div className="App">
        <header className="App-header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>Nourish </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Catalog</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>All products</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Contact</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
  export default Navbar;