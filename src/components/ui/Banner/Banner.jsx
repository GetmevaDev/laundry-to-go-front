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
  button_left,
  button_right,
  leftLink,
  rightLink,
  home,
}) => (
  <section className={styles.banner}>
    <Image
      width={1920}
      height={600}
      style={{ width: "100%" }}
      src={image}
      className={styles.image}
      alt={alt}
    />
    <div className={home ? styles.home : styles.page}>
      <Typography
        className={home ? styles.home_title : styles.title}
        color="white"
        size="large"
      >
        {title}
      </Typography>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttons}>
        <Link href="/">
          <Button color="dark"> Schedule a Pickup</Button>
        </Link>
        <a href="tel:123">
          <Button color="blue">Click to call</Button>
        </a>
      </div>
    </div>
  </section>
);
