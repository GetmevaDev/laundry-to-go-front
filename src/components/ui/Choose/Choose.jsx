import React from "react";

import { Typography } from "..";

import { ChooseItem } from "./Item/ChooseItem";

import styles from "./Choose.module.scss";

export const Choose = ({ choose }) => (
  <div className={styles.choose}>
    <div className={styles.choose_inner}>
      <Typography className={styles.title}>{choose?.Title}</Typography>
      <div className={styles.description}>{choose?.description}</div>
      <div className={styles.choose_items}>
        {choose?.Choose_item?.map((item) => (
          <ChooseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  </div>
);
