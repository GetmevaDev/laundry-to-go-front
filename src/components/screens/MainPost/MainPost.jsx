import React from "react";

import { Layout } from "@/components/layout";
import { Post, Source } from "@/components/ui";

export const MainPostScreen = ({
  data,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
  buttonLeftLink,
  buttonRightLink,
}) => (
  <Layout
    title={data?.attributes?.title}
    description="description"
    size="layout"
    page="center"
    image={image}
    titleBanner={data?.attributes?.title}
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
    className="position"
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    <Source sub={data?.attributes?.title} blog="Blog" />

    <Post data={data} />
  </Layout>
);
