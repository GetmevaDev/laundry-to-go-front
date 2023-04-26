import React from "react";

import { Typography } from "..";

import { OurWashProcessItem } from "./Item/OurWashProcessItem";

import styles from "./OurWashProcess.module.scss";

export const OurWashProcess = () => (
  <div className={styles.wash}>
    <Typography>Our Wash and Fold Process</Typography>

    <div className={styles.cards}>
      <OurWashProcessItem />
    </div>
  </div>
);
