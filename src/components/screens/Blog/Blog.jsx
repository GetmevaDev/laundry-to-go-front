import React from "react";

import { Layout } from "@/components/layout";
import { Posts, Source } from "@/components/ui";

export const BlogScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  attributes,
  buttonLeftLink,
  buttonRightLink,
  data,
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
    className="position"
  >
    <Source sub="Blog" />

    <Posts data={data} />
  </Layout>
);
