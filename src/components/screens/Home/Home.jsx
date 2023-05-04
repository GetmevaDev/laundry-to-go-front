import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Choose, Competitive, Map, VisitUs } from "@/components/ui";

export const HomeScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  attributes,
  buttonLeftLink,
  buttonRightLink,
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
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    <VisitUs visit={attributes?.Visit} />
    <Choose choose={attributes?.Choose} />

    <Competitive competitive={attributes?.competitive} />
    <Map contact={attributes?.contact_us} />
  </Layout>
);
