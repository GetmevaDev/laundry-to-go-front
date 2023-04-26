import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Choose, Competitive, Map, VisitUs } from "@/components/ui";

export const HomeScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Home"
    description="description"
    size="nolayout"
    page="right"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
  >
    <VisitUs />
    <Choose />

    <Competitive />
    <Map />
  </Layout>
);
