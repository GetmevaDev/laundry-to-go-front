import React from "react";

import { Typography } from "..";

import { OurWashProcessItem } from "./Item/OurWashProcessItem";

import styles from "./OurWashProcess.module.scss";

export const OurWashProcess = ({ cards }) => (
  <div className={styles.wash}>
    <Typography tag="h2">{cards?.title}</Typography>

    <div className={styles.cards}>
      <OurWashProcessItem cards={cards?.card} />
    </div>
  </div>
);
