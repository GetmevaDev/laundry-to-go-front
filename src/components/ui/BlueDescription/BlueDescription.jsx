import classNames from "classnames";

import { Typography } from "..";

import styles from "./BlueDescription.module.scss";

export const BlueDescription = ({ className, content, title }) => (
  <div className={classNames(styles.description, className, styles.blue)}>
    <Typography tag="h2" size="medium" color="white">
      {title}
    </Typography>

    <div className={styles.content}>{content}</div>
  </div>
);
