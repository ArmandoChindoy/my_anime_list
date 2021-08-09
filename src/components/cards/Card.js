import React from "react";
import styles from "./cards.module.css";

const Card = ({ anime }) => {
  const {
    url,
    image_url,
    airing,
    end_date,
    episodes,
    mal_id,
    members,
    rated,
    score,
    start_date,
    synopsis,
    title,
    type,
  } = anime;
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={image_url} alt="image_url" />

      <div className={styles.card__overlay}>
        <i className="fas fa-play" />
        <span className={styles.card__name}>{title}</span>
      </div>
    </div>
  );
};

export default Card;
