import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./ImageText.module.scss";

export const ImageText = ({
  title,
  description,
  image,
  alt,
  reverse,
  width,
  height,
}) => (
  <div className={reverse ? styles.image_text : styles.image_text_reverse}>
    <div className={styles.info}>
      <Typography size="small" place="left">
        {title}
      </Typography>

      <div className={styles.description}>{description}</div>
    </div>

    <div className={styles.image}>
      <Image
        width={width}
        height={height}
        alt={alt}
        src={image}
        loading="lazy"
      />
    </div>
  </div>
);
