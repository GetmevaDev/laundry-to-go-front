import React from "react";

import { Layout } from "@/components/layout";
import {
  Benefits,
  Ideal,
  ImageBannerText,
  ImageText,
  Source,
} from "@/components/ui";

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

    <ImageBannerText
      image="/images/wash.jpg"
      title="Modern, High-Capacity Equipment"
      description="Efficient Washing and Drying Solutions"
    />

    <Ideal />

    <ImageText
      title="High Extract"
      description="Our dryers take out more water from your clothes than those at the majority of other laundromats in New York. Instead of being soaked, clothing emerges damp, which cuts drying time by up to 25%."
      reverse
      width={600}
      height={300}
      image="/images/extract.jpg"
    />
    <ImageBannerText
      image="/images/wash.jpg"
      title="Are Expandable Clothes Actually Filthy? Play SuperWash now!"
    />

    <Benefits />
  </Layout>
);
