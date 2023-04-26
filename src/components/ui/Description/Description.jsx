import classNames from "classnames";
import React from "react";

import { Typography } from "..";

import styles from "./Description.module.scss";

const colors = {
  gray: styles.gray,
  dark: styles.dark,
};

export const Description = ({ color, className, content, title }) => (
  <div className={classNames(styles.description, className, colors[color])}>
    {title && (
      <Typography
        tag="h2"
        size="small"
        color={colors[color] === "blue" && "white"}
      >
        {title}
      </Typography>
    )}

    <div className={styles.content}>{content}</div>
  </div>
);
