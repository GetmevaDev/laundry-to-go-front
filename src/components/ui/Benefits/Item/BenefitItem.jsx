import Image from "next/image";
import React from "react";

import styles from "./BenefitItem.module.scss";

export const BenefitItem = ({ title, description, image, alt }) => (
  <div className={styles.benefit_item}>
    <div className={styles.image}>
      <Image
        width={335}
        height={335}
        src={image?.data?.attributes?.url}
        className={styles.image_inner}
        alt={alt}
        loading="lazy"
      />
    </div>

    <h3 className={styles.title}>{title}</h3>
    <div className={styles.description}>{description}</div>
  </div>
);
