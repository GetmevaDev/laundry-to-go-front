import MarkdownIt from "markdown-it";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { truncateText } from "@/components/utils";

import { Button } from "..";

import styles from "./Posts.module.scss";

export const Posts = ({ data }) => (
  <div className={styles.posts}>
    {data?.map((post) => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

const Post = ({ attributes }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const description = md.render(attributes?.description);

  return (
    <div className={styles.post}>
      <Image
        width={375}
        height={300}
        src={attributes?.image?.data?.attributes?.url}
        alt={attributes?.alt}
        className={styles.img}
      />
      <div className={styles.title}>{attributes?.title}</div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: truncateText(description, 150) }}
      />

      <Link href={`blog/${attributes?.slug}`}>
        <Button color="dark" className={styles.button}>
          Read more
        </Button>
      </Link>
    </div>
  );
};
