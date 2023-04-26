import Image from "next/image";
import React from "react";

import styles from "./IdealItem.module.scss";

export const IdealItem = ({ alt }) => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />
      <div className={styles.text}>Wash</div>
    </li>

    <li className={styles.item}>
      <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />

      <div className={styles.text}>Rinse</div>
    </li>

    <li className={styles.item}>
      <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />

      <div className={styles.text}>Final Rinse</div>
    </li>

    <li className={styles.item}>
      <Image width={70} height={70} src="/svg/machine1.svg" alt={alt} />

      <div className={styles.text}>Extract</div>
    </li>
  </ul>
);
