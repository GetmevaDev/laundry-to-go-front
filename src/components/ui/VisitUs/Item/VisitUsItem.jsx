import Image from "next/image";
import React from "react";

import styles from "./VisitUsItem.module.scss";

export const VisitUsItem = ({ title, description, icon }) => (
  <div className={styles.visit_item}>
    <Image width={80} height={80} src="/svg/gps.svg" />

    <h3 className={styles.title}>Address</h3>

    <div className={styles.border} />

    <div className={styles.description}>196 Mott St., New York, NY 10012</div>
  </div>
);
