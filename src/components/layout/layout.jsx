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
export const Layout = ({
  children,
  title,
  description,
  size = "layout",
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  page,
  buttonLeftLink,
  buttonRightLink,
  notFound,
}) => (
  <Meta title={title} description={description}>
    <header className={styles.layout}>
      <Header />
    </header>

    {!notFound && (
      <Banner
        image={image}
        title={titleBanner}
        description={descriptionBanner}
        buttonLeft={buttonLeft}
        buttonRight={buttonRight}
        page={page}
        buttonLeftLink={buttonLeftLink}
        buttonRightLink={buttonRightLink}
      />
    )}

    <main className={classNames(styles.layout, sizes[size])}>{children}</main>

    <Footer />
  </Meta>
);
