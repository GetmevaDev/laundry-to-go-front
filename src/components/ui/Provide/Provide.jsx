import React from "react";

import { Typography } from "..";

import { ProvideItem } from "./Item/ProvideItem";

import styles from "./Provide.module.scss";

export const Provide = ({ provide }) => (
  <div className={styles.provide_inner}>
    <div className={styles.provide}>
      <Typography>{provide?.title}</Typography>
      <div className={styles.items}>
        {provide?.provide_item?.map((item) => (
          <ProvideItem
            title={item.title_top}
            description={item.price}
            color={item.color}
            key={item.id}
          />
        ))}
      </div>

      <p className={styles.description}>{provide?.description}</p>
    </div>
  </div>
);
