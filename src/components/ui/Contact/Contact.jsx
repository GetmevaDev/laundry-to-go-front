import Image from "next/image";
import React from "react";

import styles from "./Contact.module.scss";

export const Contact = ({ contact }) => (
  <div className={styles.contact_us}>
    <h3 className={styles.title}>{contact?.title}</h3>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.description}>
          196 Mott St., New York, NY 10012
        </div>
      </li>

      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.description}>(646) 455-0606</div>
      </li>

      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.description_hours}>
          <div className={styles.hours}>Store hours:</div>

          <div className={styles.time}>
            <div className={styles.hour}>
              <div className={styles.day}>Mon - Sat:</div>
              <div className={styles.date}>8:00 AM–10:00 PM</div>
            </div>
            <div className={styles.hour}>
              <div className={styles.day}>Mon - Sat:</div>
              <div className={styles.date}>8:00 AM–10:00 PM</div>
            </div>{" "}
          </div>
        </div>
      </li>
    </ul>
  </div>
);
