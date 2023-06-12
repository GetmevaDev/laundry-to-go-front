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
    title={attributes?.seo?.title}
    description={attributes?.seo?.description}
    ogImage={attributes?.seo?.image}
    twitterCard={attributes?.seo?.twitter_card}
    twitterDescription={attributes?.seo?.twitter_description}
    twitterDomain={attributes?.seo?.twitter_domain}
    twitterImage={attributes?.seo?.twitter_image}
    twitterTitle={attributes?.seo?.twitter_title}
    twitterUrl={attributes?.seo?.twitter_url}
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
        alt={item.image.data.attributes.name}
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
