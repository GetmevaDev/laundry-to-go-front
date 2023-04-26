import React from "react";

import { Typography } from "..";

import { BenefitItem } from "./Item/BenefitItem";

import styles from "./Benefits.module.scss";

export const Benefits = () => (
  <div className={styles.benefits}>
    <Typography>Benefits of Our Dryers</Typography>

    <div className={styles.benefits_inner}>
      <BenefitItem />
      <BenefitItem />
      <BenefitItem />
    </div>
  </div>
);
