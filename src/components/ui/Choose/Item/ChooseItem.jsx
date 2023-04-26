import Image from "next/image";
import React from "react";

import styles from "./ChooseItem.module.scss";

export const ChooseItem = () => (
  <div className={styles.choose_item}>
    <Image
      width={77}
      height={90}
      src="/svg/machine.svg"
      className={styles.image}
    />

    <div className={styles.title}>Efficient and Professional Service</div>

    <div className={styles.border} />
    <div className={styles.description}>
      At Laundry To Go in Manhattan, our experienced staff is dedicated to
      providing the highest quality laundry services. From sorting to washing,
      drying, and folding, we handle every step of the process with efficiency
      and professionalism, ensuring your clothes are returned in pristine
      condition.
    </div>
  </div>
);
