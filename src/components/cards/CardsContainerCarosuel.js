import React from "react";
import styles from "./cards.module.css";

const CardsContainerCarosuel = ({ children }) => {
  return (
    <>
      <div className={styles.card__container}>{children}</div>
    </>
  );
};

export default CardsContainerCarosuel;
