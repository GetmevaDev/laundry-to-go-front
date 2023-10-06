import classNames from "classnames";
import Image from "next/image";

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
  className,
}) => (
  <section className={page === "right" ? styles.banner : styles.banner_page}>
    <div className={styles.image_inner}>
      <Image
        width={1920}
        height={600}
        alt="banner"
        src={image}
        className={styles.image}
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.68) 0%,rgba(255, 255, 255, 0) 100%)",
        }}
      />
    </div>
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

      <div
        className={classNames(
          className,
          page === "right" ? styles.buttons_page : styles.buttons
        )}
      >
        {/* <Link href={buttonLeftLink}>
          <Button color="dark">{buttonLeft}</Button>
        </Link> */}
        <a href={`tel:${buttonRightLink}`}>
          <Button color="blue">{buttonRight}</Button>
        </a>
      </div>
    </div>
  </section>
);
