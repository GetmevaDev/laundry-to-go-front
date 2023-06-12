import MarkdownIt from "markdown-it";
import Image from "next/image";
import React from "react";

import styles from "./Post.module.scss";

export const Post = ({ data }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const description = md.render(data?.attributes?.description);
  const descriptionImg = md.render(data?.attributes?.title_under_img);
  return (
    <div className={styles.post}>
      <div className={styles.left}>
        <Image
          width={585}
          height={468}
          src={data?.attributes?.image?.data?.attributes?.url}
          alt={data?.alt}
          className={styles.image}
        />

        <div
          className={styles.description_img}
          dangerouslySetInnerHTML={{ __html: descriptionImg }}
        />
      </div>

      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};
