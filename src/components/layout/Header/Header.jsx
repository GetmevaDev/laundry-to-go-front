import React from "react";

import { Logo, Navigation } from "@/components/ui";

import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.header}>
    <div>
      <Logo />
    </div>
    <div className={styles.nav}>
      <Navigation />
    </div>
  </div>
);
