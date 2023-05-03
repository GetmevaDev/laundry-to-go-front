import Link from "next/link";

import styles from "./Source.module.scss";

export const Source = ({ sub }) => (
  <div className={styles.source_inner}>
    <div className={styles.source}>
      <Link className={styles.title} href="/">
        Home
      </Link>
      <div className={styles.path}>
        <div>»</div>
        <div> {sub}</div>
      </div>
    </div>
  </div>
);
