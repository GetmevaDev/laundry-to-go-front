import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Competitive.module.scss";

export const Competitive = () => (
  <div className={styles.competititve}>
    <div className={styles.competititve_inner}>
      <div className={styles.info}>
        <Typography place="left" className={styles.title}>
          Competitive Pricing
        </Typography>

        <div className={styles.description}>
          At Laundry To Go in Manhattan, NYC, we believe that top-notch laundry
          services should be affordable. Our competitive pricing ensures that
          you receive exceptional service without breaking the bank.
        </div>

        <Button color="dark" className={styles.button}>
          See Our Pricing
        </Button>
      </div>
      <div className={styles.image}>
        <Image width={380} height={571} src="/images/comp.jpg" />
      </div>
    </div>
  </div>
);
