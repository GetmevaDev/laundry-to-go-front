import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Logo.module.scss";

export const Logo = ({ className }) => (
  <Link href="/" className={styles.logo}>
    <Image
      src="/svg/logo.svg"
      width={188}
      height={191}
      alt=""
      className={classNames(styles.image, className)}
    />
  </Link>
);
