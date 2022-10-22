import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>Header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, quidem?
      </p>
    </div>
  );
};

export default Header;
