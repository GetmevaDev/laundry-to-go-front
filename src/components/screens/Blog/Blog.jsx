import React from "react";

import { Layout } from "@/components/layout";
import { Posts, Source } from "@/components/ui";

export const BlogScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  attributes,
  buttonLeftLink,
  buttonRightLink,
  data,
}) => (
  <Layout
    title="Blog"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
    page="center"
    className="position"
  >
    <Source sub="Blog" />

    <Posts data={data} />
  </Layout>
);
