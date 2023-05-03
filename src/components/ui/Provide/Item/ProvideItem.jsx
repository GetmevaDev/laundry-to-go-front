import classNames from "classnames";
import React from "react";

import styles from "./ProvideItem.module.scss";

const colors = {
  dark: styles.dark,
  blue: styles.blue,
};

export const ProvideItem = ({ title, description, color, className }) => (
  <div className={classNames(styles.provide_item, className, colors[color])}>
    <h5 className={styles.title}>{title}</h5>
    <p className={styles.description}>{description}</p>
  </div>
);
