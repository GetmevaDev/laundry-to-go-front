import Image from "next/image";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Competitive.module.scss";

export const Competitive = ({ competitive }) => (
  <div className={styles.competititve}>
    <div className={styles.competititve_inner}>
      <div className={styles.info}>
        <Typography place="left" className={styles.title} tag="h2">
          {competitive?.title}
        </Typography>

        <div className={styles.description}>{competitive?.description}</div>

        <Button color="dark" className={styles.button}>
          {competitive?.button_text}
        </Button>
      </div>
      <div className={styles.image}>
        <Image
          width={380}
          height={571}
          src={competitive?.image?.data?.attributes?.url}
          loading="lazy"
          alt={competitive?.alt}
        />
      </div>
    </div>
  </div>
);
