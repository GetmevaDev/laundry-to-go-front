import React from "react";

import { Typography } from "..";

import { WashProcessItem } from "./Item/WashProcessItem";

import styles from "./WashProcess.module.scss";

export const WashProcess = ({ cards }) => (
  <div className={styles.wash}>
    <Typography>{cards?.title}</Typography>

    <div className={styles.cards}>
      <WashProcessItem cards={cards?.card} />
    </div>
  </div>
);
