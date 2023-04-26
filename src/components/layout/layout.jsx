import classNames from "classnames";
import React from "react";

import Meta from "../seo/Meta";
import { Banner } from "../ui";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

import styles from "./layout.module.scss";

const sizes = {
  layout: styles.layout,
  nolayout: styles.nolayout,
};
export const Layout = ({ children, title, description, size = "layout" }) => (
  <Meta title={title} description={description}>
    <header className={styles.layout}>
      <Header />
    </header>

    <Banner
      image="/images/homebanner.jpg"
      title="Welcome to  Laundry To Go"
      description="Experience Exceptional Laundry Services in Manhattan"
      button_left="Schedule a Pickup"
      button_right="Click to call"
      home
    />
    <main className={classNames(styles.layout, sizes[size])}>{children}</main>

    <Footer />
  </Meta>
);
