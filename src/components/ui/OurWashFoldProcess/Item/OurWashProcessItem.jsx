import Image from "next/image";
import React from "react";

import styles from "./OurWashProcessItem.module.scss";

export const OurWashProcessItem = ({ alt }) => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/track.svg" alt={alt} />
      </div>
      <div className={styles.text}>Schedule Your Pickup</div>
      <div className={styles.description}>
        To begin, simply call us at (646) 455-0606 or visit our website to
        arrange a convenient time for our team to collect your garments. We`ll
        work with you to find a pickup window that fits your busy schedule,
        ensuring a seamless laundry experience.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/track.svg" alt={alt} />
      </div>
      <div className={styles.text}>Schedule Your Pickup</div>
      <div className={styles.description}>
        To begin, simply call us at (646) 455-0606 or visit our website to
        arrange a convenient time for our team to collect your garments. We`ll
        work with you to find a pickup window that fits your busy schedule,
        ensuring a seamless laundry experience.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/track.svg" alt={alt} />
      </div>
      <div className={styles.text}>Schedule Your Pickup</div>
      <div className={styles.description}>
        To begin, simply call us at (646) 455-0606 or visit our website to
        arrange a convenient time for our team to collect your garments. We`ll
        work with you to find a pickup window that fits your busy schedule,
        ensuring a seamless laundry experience.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/track.svg" alt={alt} />
      </div>
      <div className={styles.text}>Schedule Your Pickup</div>
      <div className={styles.description}>
        To begin, simply call us at (646) 455-0606 or visit our website to
        arrange a convenient time for our team to collect your garments. We`ll
        work with you to find a pickup window that fits your busy schedule,
        ensuring a seamless laundry experience.
      </div>
    </li>

    <li className={styles.item}>
      <div className={styles.item_inner}>
        <Image width={90} height={90} src="/svg/track.svg" alt={alt} />
      </div>
      <div className={styles.text}>Schedule Your Pickup</div>
      <div className={styles.description}>
        To begin, simply call us at (646) 455-0606 or visit our website to
        arrange a convenient time for our team to collect your garments. We`ll
        work with you to find a pickup window that fits your busy schedule,
        ensuring a seamless laundry experience.
      </div>
    </li>
  </ul>
);
