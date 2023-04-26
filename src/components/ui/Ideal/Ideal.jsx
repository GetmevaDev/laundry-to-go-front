import React from "react";

import { Typography } from "..";

import { IdealItem } from "./Item/IdealItem";

import styles from "./Ideal.module.scss";

export const Ideal = () => (
  <div className={styles.ideal}>
    <div className={styles.content}>
      <Typography>Ideal</Typography>
      <div className={styles.description}>
        Each includes a cleanse, rinse, ultimate rinse, and extraction.
      </div>
    </div>

    <div className={styles.ideal_inner}>
      <IdealItem />
    </div>
  </div>
);
