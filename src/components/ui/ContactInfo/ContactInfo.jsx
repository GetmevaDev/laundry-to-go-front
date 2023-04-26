import Image from "next/image";
import React from "react";

import { Map } from "..";

import styles from "./ContactInfo.module.scss";

export const ContactInfo = () => (
  <div className={styles.info}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.description}>9702 Church ave, Brooklyn, NY</div>
      </li>

      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.block}>
          <div className={styles.left_phone}>(718)</div>

          <div className={styles.right_phone}>490-0334</div>
        </div>
      </li>

      <li className={styles.item}>
        <Image width={30} height={30} src="/svg/gps.svg" />
        <div className={styles.block}>
          <div className={styles.hours}>Store hours:</div>

          <div className={styles.time}>24/7</div>
        </div>
      </li>
    </ul>
    <div className={styles.iframe}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8633533055736!2d-73.99776742343548!3d40.72102453706216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25988a20edc35%3A0x424d39fc1a7daecc!2s196%20Mott%20St%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2skz!4v1682500700728!5m2!1sen!2skz"
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "50px" }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);
