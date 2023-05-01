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

export const menuItems = [
  { label: "Home", path: "/", subMenu: [] },
  {
    label: "About Us",
    path: "/about-us",
    subMenu: [],
  },
  {
    label: "Self Service",
    path: "/self-service",
    subMenu: [],
  },
  {
    label: "Wash & Fold",
    path: "/wash-fold",
    subMenu: [],
  },

  {
    label: "Pickup & Delivery",
    path: "/pickup-delivery",
    subMenu: [
      {
        label: "Commercial Laundry Services",
        path: "/laundry-services",
      },
    ],
    svg: <i className="bx bx-chevron-down" />,
  },

  {
    label: "Pricing",
    path: "/pricing",
    subMenu: [],
  },
  {
    label: "Contact us",
    path: "/contact-us",
    subMenu: [],
  },
];

export const Navigation = ({ className }) => {
  const [nav, setNav] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleClick = (menuItem) => {
    setActiveMenuItem(activeMenuItem === menuItem ? null : menuItem);
  };

  const router = useRouter();

  const renderSubMenu = (subMenuItems) => (
    <ul className={styles.sub_menu}>
      {subMenuItems.map((subMenuItem) => (
        <li key={subMenuItem.label} className={styles.sub_menu_item}>
          <Link href={subMenuItem.path} className={styles.sub_menu_link}>
            {subMenuItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <nav className={styles.navigation}>
        <ul
          className={classNames(
            nav ? [styles.menu, styles.active].join(" ") : [styles.menu],
            {},
            [className]
          )}
        >
          {menuItems.map((item) => (
            <li key={item.item}>
              <Link
                href={item.path}
                onClick={() => handleClick(item)}
                className={
                  router.pathname === item.path ? styles.active : styles.link
                }
              >
                {item.label}
              </Link>
              <span>{item.svg && item.svg}</span>
              {item.subMenu.length > 0 && renderSubMenu(item.subMenu)}
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
    </div>
  );
};
