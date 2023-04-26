import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button, Typography } from "..";

import styles from "./Banner.module.scss";

export const Banner = ({
  alt,
  image,
  title,
  description,
  buttonLeft,
  buttonRight,
  leftLink,
  rightLink,
  page,
}) => (
  <section className={page === "right" ? styles.banner : styles.banner_page}>
    <Image
      width={1920}
      height={600}
      style={{ width: "100%" }}
      src={image}
      className={styles.image}
      alt={alt}
    />
    <div className={page === "right" ? styles.home : styles.page}>
      <Typography
        className={page === "right" ? styles.home_title : styles.title}
        color="white"
        size="large"
      >
        {title}
      </Typography>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttons}>
        <Link href="/">
          <Button color="dark">{buttonLeft}</Button>
        </Link>
        <a href="tel:123">
          <Button color="blue">{buttonRight}</Button>
        </a>
      </div>
    </div>
  </section>
);
