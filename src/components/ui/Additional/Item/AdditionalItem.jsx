import Image from "next/image";
import React from "react";

import styles from "./AdditionalItem.module.scss";

export const AdditionalItem = ({ alt }) => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={43} height={43} src="/svg/addio.svg" alt={alt} />
      </div>
      <div className={styles.text}>Prewash</div>
    </li>
  </ul>
);
