import Image from "next/image";
import React from "react";

import styles from "./VisitUsItem.module.scss";

export const VisitUsItem = ({
  title,
  description,
  image,
  alt,
  telLeft,
  telRight,
}) => (
  <div className={styles.visit_item}>
    <Image
      width={80}
      height={80}
      src={image}
      alt={alt}
      className={styles.image}
    />

    <h3 className={styles.title}>{title}</h3>

    <div className={styles.border} />

    {!telLeft ? (
      <p
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: `	${description}`,
        }}
      />
    ) : (
      <a href={`tel:${telLeft} ${telRight}`} className={styles.description}>
        <span className={styles.tel}>{telLeft}</span> <span> {telRight}</span>
      </a>
    )}
  </div>
);
