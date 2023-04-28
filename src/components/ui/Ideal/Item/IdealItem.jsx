import Image from "next/image";
import React from "react";

import styles from "./IdealItem.module.scss";

export const IdealItem = ({ cards }) => (
  <ul className={styles.items}>
    {cards?.map((card) => (
      <li className={styles.item} key={card.id}>
        <Image
          width={70}
          height={70}
          src={card?.svg?.data?.attributes?.url}
          alt={card.alt}
        />
        <div className={styles.text}>{card.text}</div>
      </li>
    ))}
  </ul>
);
