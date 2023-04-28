import React from "react";

import { Typography } from "..";

import { BenefitItem } from "./Item/BenefitItem";

import styles from "./Benefits.module.scss";

export const Benefits = ({ benefits }) => (
  <div className={styles.benefits}>
    <Typography>{benefits?.title}</Typography>

    <div className={styles.benefits_inner}>
      {benefits?.benefit_item?.map((benefit) => (
        <BenefitItem key={benefit.id} {...benefit} />
      ))}
    </div>
  </div>
);
