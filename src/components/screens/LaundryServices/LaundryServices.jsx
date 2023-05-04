import React from "react";

import { Layout } from "@/components/layout";
import {
  BlueDescription,
  Description,
  ImageText,
  Source,
} from "@/components/ui";

export const LaundryServicesScreen = ({
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
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Pricing" />

    <ImageText
      title={attributes?.block_item?.title}
      description={attributes?.block_item?.description}
      reverse={attributes?.block_item?.reverse}
      width={600}
      height={300}
      image={attributes?.block_item?.image?.data?.attributes?.url}
    />

    <BlueDescription
      content={attributes?.description_banner?.description}
      title={attributes?.description_banner?.title}
      color="blue"
    />

    {attributes?.block?.block_item?.map((item) => (
      <ImageText
        key={item.id}
        width={600}
        height={400}
        reverse={item.reverse}
        image={item.image.data.attributes.url}
        title={item.title}
        description={item.description}
      />
    ))}

    <Description
      color={attributes?.description_banner_bottom?.bg_color}
      content={attributes?.description_banner_bottom?.description}
    />
  </Layout>
);
