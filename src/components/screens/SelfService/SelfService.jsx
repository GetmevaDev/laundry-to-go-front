import React from "react";

import { Layout } from "@/components/layout";
import {
  Additional,
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
  attributes,
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
      image={attributes?.image_banner_text?.image?.data?.attributes?.url}
      title={attributes?.image_banner_text?.title}
      description={attributes?.image_banner_text?.description}
      alt={attributes?.image_banner_text?.alt}
    />

    <Ideal ideal={attributes?.cards} />

    {console.log(attributes, "attr")}

    <ImageText
      title={attributes?.block_item?.title}
      description={attributes?.block_item?.description}
      reverse={attributes?.block_item?.reverse}
      width={600}
      height={300}
      image={attributes?.block_item?.image?.data?.attributes?.url}
    />
    <Additional additional={attributes?.cards_additional} />

    <ImageBannerText
      image={attributes?.image_banner_text_play?.image?.data?.attributes?.url}
      alt={attributes?.image_banner_text_play?.alt}
      title={attributes?.image_banner_text_play?.title}
    />

    <Benefits benefits={attributes?.benefits} />
  </Layout>
);
