import React from "react";

import { Layout } from "@/components/layout";
import { Source } from "@/components/ui";

export const PickupScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Pickup & Delivery"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Pickup & Delivery" />
  </Layout>
);
