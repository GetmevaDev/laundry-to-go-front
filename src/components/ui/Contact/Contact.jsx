import Image from "next/image";
import React from "react";

import styles from "./Contact.module.scss";

export const Contact = ({ contact }) => (
  <div className={styles.contact_us}>
    <h2 className={styles.title}>{contact?.title}</h2>
    <ul className={styles.list}>
      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          src={contact?.contact_address?.image?.data?.attributes?.url}
          alt={contact?.contact_address?.alt}
        />
        <div className={styles.description}>
          {contact?.contact_address?.text}
        </div>
      </li>

      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          src={contact?.contact_phone_page?.image?.data?.attributes?.url}
          alt={contact?.contact_phone_page?.alt}
        />
        <div className={styles.description}>
          {contact?.contact_phone_page?.left_phone}
        </div>
        <div> {contact?.contact_phone_page?.right_phone}</div>
      </li>

      {console.log(contact, "contact")}
      <li className={styles.item}>
        <Image
          width={30}
          height={30}
          src={contact?.contact_date_page?.image?.data?.attributes?.url}
          alt={contact?.contact_date_page?.alt}
        />
        <div className={styles.description_hours}>
          <div className={styles.hours}>{contact?.contact_date_page?.text}</div>

          <div className={styles.time}>
            <div className={styles.hour}>
              <div className={styles.day}>
                {contact?.contact_date_page?.date}
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
