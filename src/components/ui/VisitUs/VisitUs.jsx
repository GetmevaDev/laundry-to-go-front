import React from "react";

import { Typography } from "..";

import { VisitUsItem } from "./Item/VisitUsItem";

import styles from "./VisitUs.module.scss";

export const VisitUs = ({ visit }) => (
  <div className={styles.visit_us}>
    <Typography tag="h2" color="black" size="medium" className={styles.title}>
      {visit?.Title}
    </Typography>
    <div className={styles.visit}>
      {visit?.visit_item?.map((item) => (
        <VisitUsItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
