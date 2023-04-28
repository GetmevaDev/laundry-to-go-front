import Image from "next/image";
import React from "react";

import styles from "./ImageBannerText.module.scss";

export const ImageBannerText = ({ title, description, image, alt }) => (
  <div className={styles.image_banner_text}>
    <div className={styles.image_inner}>
      <Image
        width={1170}
        height={272}
        alt={alt}
        src={image}
        className={styles.image}
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.68) 0%,rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);
