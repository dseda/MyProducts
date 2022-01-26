import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}> </div>
      <div className={styles.logo}>
        <Link to="/">E-Commerce</Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Products</Link>
        </li>
      </ul>
      <div className={styles.right}>
        <ButtonGroup>
          <Link to="/signup">
            <Button colorScheme="pink">Register</Button>
          </Link>
          <Link to="/signin">
            <Button colorScheme="pink">Login</Button>
          </Link>
        </ButtonGroup>
      </div>
    </nav>
  );
}

export default Navbar;
