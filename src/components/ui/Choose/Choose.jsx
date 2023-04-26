import React from "react";

import { Typography } from "..";

import { ChooseItem } from "./Item/ChooseItem";

import styles from "./Choose.module.scss";

export const Choose = () => (
  <div className={styles.choose}>
    <div className={styles.choose_inner}>
      <Typography className={styles.title}>
        Why Choose Laundry To Go?
      </Typography>
      <div className={styles.description}>
        Experience the Laundry Difference
      </div>
      <div className={styles.choose_items}>
        <ChooseItem />
        <ChooseItem />
        <ChooseItem />
        <ChooseItem />
        <ChooseItem />
        <ChooseItem />
      </div>
    </div>
  </div>
);
