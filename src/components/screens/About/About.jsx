import React from "react";

import { Layout } from "@/components/layout";
import { Description, ImageText, Source } from "@/components/ui";

export const AboutScreen = ({
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
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="About Us" />

    <Description
      color={attributes?.description_banner?.bg_color}
      content={attributes?.description_banner?.description}
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
      title={attributes?.description_banner_bottom?.title}
      content={attributes?.description_banner_bottom?.description}
    />
  </Layout>
);
