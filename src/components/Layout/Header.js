import React, { Fragment } from "react";
import deskImage from "../../assets/desk-foods.jpg";
import Button from "./HeaderCartButton";
import styles from "./Header.module.scss";

const Header = ({ setCardModal }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button onClick={() => setCardModal(true)}></Button>
      </header>
      <div>
        <img src={deskImage} alt="" className={styles["main-image"]} />
      </div>
    </Fragment>
  );
};

export default Header;
