import Image from "next/image";
import React from "react";

import styles from "./WashProcessItem.module.scss";

export const WashProcessItem = ({ alt }) => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/dryer.svg" alt={alt} />
      </div>
      <div className={styles.text}>Drop Off or Schedule a Pickup</div>
      <div className={styles.description}>
        Begin your hassle-free laundry experience by either dropping off your
        garments at our Mott St. location or scheduling a convenient pickup
        time. Our staff will be on hand to receive your laundry and discuss any
        specific preferences or instructions you may have. Choose your preferred
        detergent, fabric softener, and any other special requests, and our team
        will ensure that your laundry is handled according to your needs.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/dryer.svg" alt={alt} />
      </div>
      <div className={styles.text}>Drop Off or Schedule a Pickup</div>
      <div className={styles.description}>
        Begin your hassle-free laundry experience by either dropping off your
        garments at our Mott St. location or scheduling a convenient pickup
        time. Our staff will be on hand to receive your laundry and discuss any
        specific preferences or instructions you may have. Choose your preferred
        detergent, fabric softener, and any other special requests, and our team
        will ensure that your laundry is handled according to your needs.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/dryer.svg" alt={alt} />
      </div>
      <div className={styles.text}>Drop Off or Schedule a Pickup</div>
      <div className={styles.description}>
        Begin your hassle-free laundry experience by either dropping off your
        garments at our Mott St. location or scheduling a convenient pickup
        time. Our staff will be on hand to receive your laundry and discuss any
        specific preferences or instructions you may have. Choose your preferred
        detergent, fabric softener, and any other special requests, and our team
        will ensure that your laundry is handled according to your needs.
      </div>
    </li>
  </ul>
);
