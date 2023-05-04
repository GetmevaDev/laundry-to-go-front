import React from "react";

import { Layout } from "@/components/layout";
import {
  BlueDescription,
  Description,
  ImageText,
  Provide,
  Scheduling,
  Source,
} from "@/components/ui";

export const PricingScreen = ({
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
    title="Pricing"
    description="description"
    image={image}
    size="nolayout"
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Pricing" />
    <Scheduling scheduling={attributes?.cards} />

    <Provide provide={attributes?.provide} />

    {console.log(attributes, "attr")}

    <ImageText
      title={attributes?.block_item?.title}
      description={attributes?.block_item?.description}
      reverse={attributes?.block_item?.reverse}
      width={600}
      height={300}
      image={attributes?.block_item?.image?.data?.attributes?.url}
    />
  </Layout>
);
