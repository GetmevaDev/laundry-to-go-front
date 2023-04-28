import React from "react";

import { Typography } from "..";

import { IdealItem } from "./Item/IdealItem";

import styles from "./Ideal.module.scss";

export const Ideal = ({ ideal }) => (
  <div className={styles.ideal}>
    <div className={styles.content}>
      <Typography>{ideal?.title}</Typography>
      <div className={styles.description}>{ideal?.description}</div>
    </div>

    <div className={styles.ideal_inner}>
      <IdealItem cards={ideal?.card} />
    </div>
  </div>
);
