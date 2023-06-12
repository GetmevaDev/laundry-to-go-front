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
    ogImage={data?.seo?.image}
    twitterCard={data?.seo?.twitter_card}
    twitterDescription={data?.seo?.twitter_description}
    twitterDomain={data?.seo?.twitter_domain}
    twitterImage={data?.seo?.twitter_image}
    twitterTitle={data?.seo?.twitter_title}
    twitterUrl={data?.seo?.twitter_url}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    className="post"
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    <Source sub={data?.attributes?.title} blog="Blog" />

    <Post data={data} />
  </Layout>
);
