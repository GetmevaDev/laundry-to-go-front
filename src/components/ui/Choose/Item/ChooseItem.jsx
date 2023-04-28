import Image from "next/image";
import React from "react";

import styles from "./ChooseItem.module.scss";

export const ChooseItem = ({ title, description, alt, image }) => (
  <div className={styles.choose_item}>
    <Image
      width={77}
      height={90}
      alt={alt}
      src={image?.data?.attributes?.url}
      className={styles.image}
      loading="lazy"
    />

    <div className={styles.title}>{title}</div>

    <div className={styles.border} />
    <div className={styles.description}>{description}</div>
  </div>
);
