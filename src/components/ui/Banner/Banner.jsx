import classNames from "classnames";
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
  buttonRightLink,
  buttonLeftLink,
  page,
}) => (
  <section className={page === "right" ? styles.banner : styles.banner_page}>
    <Image
      width={1920}
      height={600}
      style={{ width: "100%" }}
      src={image}
      loading="lazy"
      className={styles.image}
      alt="banner"
    />
    <div className={page === "right" ? styles.home : styles.page}>
      <Typography
        className={classNames(
          page === "right" ? styles.home_title : styles.title
        )}
        color="white"
        size="large"
      >
        {title}
      </Typography>
      <p
        className={
          page === "right" ? styles.home_description : styles.description
        }
      >
        {description}
      </p>
    </div>
    <div className={styles.buttons}>
      <Link href={buttonLeftLink}>
        <Button color="dark">{buttonLeft}</Button>
      </Link>
      <a href={`tel:${buttonRightLink}`}>
        <Button color="blue">{buttonRight}</Button>
      </a>
    </div>
  </section>
);
