import React from "react";

import { Layout } from "@/components/layout";
import { Source } from "@/components/ui";

export const SelfServiceScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Self Service"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Self Service" />
  </Layout>
);
