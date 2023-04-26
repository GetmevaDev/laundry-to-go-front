import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Choose, HomeBanner, Source, VisitUs } from "@/components/ui";

export const AboutScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="About"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="About Us" />
  </Layout>
);
