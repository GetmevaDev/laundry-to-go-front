import React from "react";

import { Typography } from "..";

import { AdditionalItem } from "./Item/AdditionalItem";

import styles from "./Additional.module.scss";

export const Additional = ({ additional }) => (
  <div className={styles.additional}>
    <Typography size="small" tag="h2">
      {additional?.title}
    </Typography>
    <div className={styles.additional_inner}>
      <AdditionalItem cards={additional?.card} />
    </div>
  </div>
);
