import React from "react";

import { Layout } from "@/components/layout";
import {
  Description,
  ImageText,
  OurWashProcess,
  Source,
} from "@/components/ui";

export const PickupScreen = ({
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
    <Source sub="Pickup & Delivery" />

    <ImageText
      title={attributes?.block_item?.title}
      description={attributes?.block_item?.description}
      reverse={attributes?.block_item?.reverse}
      width={600}
      height={300}
      alt={attributes?.block_item?.image?.data?.attributes?.alt}
      image={attributes?.block_item?.image?.data?.attributes?.url}
    />

    <OurWashProcess cards={attributes?.cards} />

    {attributes?.block?.block_item?.map((item) => (
      <ImageText
        key={item.id}
        width={600}
        height={400}
        reverse={item.reverse}
        image={item.image.data.attributes.url}
        title={item.title}
        alt={item.image.data.attributes.name}
        description={item.description}
      />
    ))}

    <Description
      color={attributes?.description_banner?.bg_color}
      content={attributes?.description_banner?.description}
    />
  </Layout>
);
