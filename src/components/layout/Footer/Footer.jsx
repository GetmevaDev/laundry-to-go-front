import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { menu, Rgm } from "@/components/ui";

import styles from "./Footer.module.scss";

export const Footer = ({ navigation }) => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_top}>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item.id} className={styles.item}>
              <Link
                href={item.href}
                className={
                  router.pathname === item.href ? styles.active : styles.link
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_inner}>
          <div className={styles.copyright}>
            © 2023 <p className={styles.laundry}> Laundry To Go</p> All rights
            reserved
          </div>
          <Rgm />
        </div>
      </div>
    </footer>
  );
};
