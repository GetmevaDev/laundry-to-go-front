import Image from "next/image";
import React from "react";

import { Map } from "..";

import styles from "./ContactInfo.module.scss";

export const ContactInfo = ({ contact }) => (
  <div className={styles.info}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          alt={contact?.contact_address.alt}
          src={contact?.contact_address?.image?.data?.attributes?.url}
        />
        <div className={styles.description}>
          {contact?.contact_address?.text}
        </div>
      </li>

      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          alt={contact?.contact_phone_page?.alt}
          src={contact?.contact_phone_page?.image?.data?.attributes?.url}
        />
        <div className={styles.block}>
          <div className={styles.left_phone}>
            {contact?.contact_phone_page?.left_phone}
          </div>

          <div className={styles.right_phone}>
            {contact?.contact_phone_page?.right_phone}
          </div>
        </div>
      </li>

      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          alt={contact?.contact_date_page?.alt}
          src={contact?.contact_date_page?.image?.data?.attributes?.url}
        />
        <div className={styles.block}>
          <div className={styles.hours}>{contact?.contact_date_page?.text}</div>

          <div className={styles.time}>{contact?.contact_date_page?.date}</div>
        </div>
      </li>
    </ul>
    <div className={styles.iframe}>
      <iframe
        title="map"
        src={contact?.href_map}
        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "40px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </div>
);
