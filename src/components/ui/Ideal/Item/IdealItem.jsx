import Image from "next/image";
import React from "react";

import styles from "./IdealItem.module.scss";

export const IdealItem = ({ alt }) => (
  <div className={styles.items}>
    <div className={styles.item}>
      <div className={styles.image_inner}>
        <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />
      </div>
      <div className={styles.text}>Wash</div>
    </div>

    <div className={styles.item}>
      <div className={styles.image_inner}>
        <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />
      </div>
      <div className={styles.text}>Wash</div>
    </div>

    <div className={styles.item}>
      <div className={styles.image_inner}>
        <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />
      </div>
      <div className={styles.text}>Wash</div>
    </div>

    <div className={styles.item}>
      <div className={styles.image_inner}>
        <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />
      </div>
      <div className={styles.text}>Wash</div>
    </div>
  </div>
);
