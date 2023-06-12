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
  buttonLeftLink,
  buttonRightLink,
}) => (
  <Layout
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
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
