import Image from "next/image";
import React from "react";

import styles from "./BenefitItem.module.scss";

export const BenefitItem = ({ title, description, image }) => (
  <div className={styles.benefit_item}>
    <div className={styles.image}>
      <Image
        width={335}
        height={335}
        src="/images/benefit1.jpg"
        className={styles.image_inner}
      />
    </div>

    <h3 className={styles.title}>Safe</h3>
    <div className={styles.description}>
      Our dryers employ stainless steel barrels. It is virtually impossible for
      grime, pathogens, or viruses to collect on stainless steel because it has
      no holes.
    </div>
  </div>
);
