import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./Navigation.module.scss";

export const menu = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/about-us",
    name: "About Us",
  },
  {
    id: 3,
    href: "/self-service",
    name: "Self Service",
  },
  {
    id: 4,
    href: "/wash-fold",
    name: "Wash & Fold",
  },
  {
    id: 5,
    href: "/pickup-delivery",
    name: "Pickup & Delivery",
  },
  {
    id: 6,
    href: "/pricing",
    name: "Pricing",
  },
  {
    id: 7,
    href: "/contact-us",
    name: "Contact us",
  },
];

export const Navigation = ({ className }) => {
  const [nav, setNav] = useState(false);

  const router = useRouter();
  return (
    <nav className={styles.navigation}>
      <ul
        className={classNames(
          nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
          {},
          [className]
        )}
      >
        {menu.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link
              href={item.href}
              onClick={() => setNav(!nav)}
              className={
                router.pathname === item.href ? styles.active : styles.link
              }
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? (
          <i className="bx bx-window-close bx-rotate-180" />
        ) : (
          <i className="bx bx-menu-alt-right" />
        )}
      </div>
    </nav>
  );
};
