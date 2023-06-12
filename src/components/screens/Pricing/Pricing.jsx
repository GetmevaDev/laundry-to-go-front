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
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    image={image}
    size="nolayout"
    titleBanner={titleBanner}
    ogImage={attributes?.seo?.image}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
    page="center"
    className="pricing"
  >
    <Source sub="Pricing" />
    <Scheduling scheduling={attributes?.cards} />

    <Provide provide={attributes?.provide} />

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
