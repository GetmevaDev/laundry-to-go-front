import React from "react";

import { Typography } from "..";

import { AdditionalItem } from "./Item/AdditionalItem";

import styles from "./Additional.module.scss";

export const Additional = () => (
  <div className={styles.additional}>
    <Typography size="small">
      The additional three procedures that SuperWash provides for your heavily
      dirty apparel are Prewash, Extended Wash, and Extra Rinse.
    </Typography>
    <div className={styles.additional_inner}>
      <AdditionalItem />
    </div>
  </div>
);
