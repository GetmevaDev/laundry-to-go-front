import React from "react";

import { Layout } from "@/components/layout";
import { Post, Source } from "@/components/ui";

export const MainPostScreen = ({
  data,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  buttonLeftLink,
  buttonRightLink,
}) => (
  <Layout
    title={data?.attributes?.title}
    description="description"
    size="layout"
    page="center"
    image={image}
    titleBanner={data?.attributes?.title}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    className="position"
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    <Source sub={data?.attributes?.title} blog="Blog" />

    <Post data={data} />
  </Layout>
);
