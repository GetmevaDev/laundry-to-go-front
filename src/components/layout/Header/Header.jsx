import React from "react";

import { Logo, Navigation } from "@/components/ui";

import styles from "./Header.module.scss";

const navLinks = [
  {
    name: "link one",
  },
  {
    name: "link two",
    children: [
      {
        name: "link two sub",
      },
      {
        name: "link two sub 2",
      },
    ],
  },
  {
    name: "link three",
    children: [
      {
        name: "link three sub",
      },
      {
        name: "link three sub 2",
        children: [
          {
            name: "deep 3",
          },
          {
            name: "deep 2nd 3",
          },
        ],
      },
      {
        name: "link three sub",
      },
    ],
  },
  {
    name: "link four",
  },
  {
    name: "link five",
    children: [
      {
        name: "link five sub 1",
      },
      {
        name: "link five sub 2",
      },
    ],
  },
];

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
