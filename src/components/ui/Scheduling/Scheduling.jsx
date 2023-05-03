import React from "react";

import { Typography } from "..";

import { SchedulingItem } from "./Item/SchedulingItem";

import styles from "./Scheduling.module.scss";

export const Scheduling = ({ scheduling }) => (
  <div className={styles.scheduling}>
    <div className={styles.content}>
      <Typography tag="h2">{scheduling?.title}</Typography>
    </div>

    <div className={styles.scheduling_inner}>
      <SchedulingItem cards={scheduling?.card} />
    </div>
  </div>
);
