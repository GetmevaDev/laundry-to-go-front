import React from "react";

import { Layout } from "@/components/layout";
import { Source } from "@/components/ui";

export const WashFoldScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Wash & Fold"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Wash and Fold" />
  </Layout>
);
