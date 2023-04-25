import React from "react";

import Meta from "../seo/Meta";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";

export const Layout = ({ children, title, description }) => (
  <Meta title={title} description={description}>
    <main className={styles.layout}>
      <Header />
      {children}

      <Footer />
    </main>
  </Meta>
);
