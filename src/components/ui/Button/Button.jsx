import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const colors = {
  blue: styles.blue,
  dark: styles.dark,
};

export const Button = ({
  type = "button",
  children,
  className,
  disabled,
  color,
  ...props
}) => {
  const classes = classNames(styles.button, className, colors[color]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classes} {...props} disabled={disabled}>
      {children}
    </button>
  );
};
