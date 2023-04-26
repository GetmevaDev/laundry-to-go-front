import React from "react";

import { Typography } from "..";

import { WashProcessItem } from "./Item/WashProcessItem";

import styles from "./WashProcess.module.scss";

export const WashProcess = () => (
  <div className={styles.wash}>
    <Typography>The Wash and Fold Process at Laundry To Go</Typography>

    <div className={styles.cards}>
      <WashProcessItem />
    </div>
  </div>
);
