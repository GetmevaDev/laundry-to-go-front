import Image from "next/image";
import React from "react";

import styles from "./SchedulingItem.module.scss";

export const SchedulingItem = ({ cards }) => (
  <ul className={styles.items}>
    {cards?.map((card) => (
      <li className={styles.item} key={card.id}>
        <div className={styles.item_inner}>
          <Image
            width={90}
            height={90}
            className={styles.image}
            src={card?.svg?.data?.attributes?.url}
            alt={card.alt}
          />
        </div>
        <div className={styles.description}>{card.text}</div>
      </li>
    ))}
  </ul>
);
