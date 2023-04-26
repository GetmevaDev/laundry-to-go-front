import React from "react";

import { Typography } from "..";

import { VisitUsItem } from "./Item/VisitUsItem";

import styles from "./VisitUs.module.scss";

export const VisitUs = () => (
  <div className={styles.visit_us}>
    <Typography tag="h2" color="black" size="medium" className={styles.title}>
      Visit is Today
    </Typography>
    <div className={styles.visit}>
      <VisitUsItem />
      <VisitUsItem />
      <VisitUsItem />
    </div>
  </div>
);
