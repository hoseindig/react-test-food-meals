import React, { Fragment } from "react";
import styles from './HeaderCartButton.module.css'
const HeaderCartBotton = () => {
  return (
    <Fragment>
      <button className={styles.button}>
        <span className={styles.icon}><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
        <span>Your Card</span>
        <span className={styles.badge}>3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartBotton;
