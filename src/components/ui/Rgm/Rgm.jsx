import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Rgm.module.scss";

export const Rgm = () => (
  <div className={styles.rgm}>
    <Link href="https://robertgerov.com/">
      <Image src="/svg/rgm.svg" width={61} height={27} alt="rgm" />
    </Link>

    <div className={styles.web}>
      Web Design & Digital Marketing
      <div className={styles.by}>
        by{" "}
        <Link href="https://robertgerov.com/">
          <p className={styles.robert}>Robert Gerov Media</p>
        </Link>
      </div>
    </div>
  </div>
);
