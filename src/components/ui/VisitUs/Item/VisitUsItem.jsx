import Image from "next/image";
import React from "react";

import styles from "./VisitUsItem.module.scss";

export const VisitUsItem = ({ title, description, image, alt }) => (
  <div className={styles.visit_item}>
    <Image
      width={80}
      height={80}
      src={image?.data?.attributes?.url}
      alt={alt}
    />

    <h3 className={styles.title}>{title}</h3>

    <div className={styles.border} />

    <a className={styles.description} href={`tel:${description}`}>
      {description}
    </a>
  </div>
);
