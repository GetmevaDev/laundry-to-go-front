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
      <Typography tag="h2" size="small">
        {title}
      </Typography>
    )}

    <div className={color === "gray" ? styles.content_gray : styles.content}>
      {content}
    </div>
  </div>
);
