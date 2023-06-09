import Image from "next/image";
import React from "react";

import styles from "./OurWashProcessItem.module.scss";

export const OurWashProcessItem = ({ cards }) => (
  <ul className={styles.items}>
    {cards?.map((card) => (
      <li className={styles.item} key={card.id}>
        <div className={styles.item_inner}>
          <Image
            width={90}
            height={90}
            src={card?.svg?.data?.attributes?.url}
            alt={card.alt}
          />
        </div>
        <div className={styles.text}>{card.text}</div>
        <div className={styles.description}>{card.description}</div>
      </li>
    ))}
  </ul>
);
