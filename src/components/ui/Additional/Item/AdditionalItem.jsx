import Image from "next/image";
import React from "react";

import styles from "./AdditionalItem.module.scss";

export const AdditionalItem = ({ cards }) => (
  <ul className={styles.items}>
    {cards?.map((card) => (
      <li className={styles.item} key={card.id}>
        <div className={styles.item_inner}>
          <Image
            width={43}
            height={43}
            src={card.svg?.data?.attributes?.url}
            alt={card.alt}
          />
        </div>
        <div className={styles.text}>{card.text}</div>
      </li>
    ))}
  </ul>
);
