import Image from "next/image";
import React from "react";

import { Typography } from "..";

import styles from "./ImageText.module.scss";

export const ImageText = ({ title, description, image, alt, reverse }) => (
  <div className={reverse ? styles.image_text : styles.image_text_reverse}>
    <div className={styles.info}>
      <Typography size="small" place="left">
        {title}
      </Typography>

      <div className={styles.description}>{description}</div>
    </div>

    <div className={styles.image}>
      <Image width={640} height={426} alt={alt} src={image} />
    </div>
  </div>
);
