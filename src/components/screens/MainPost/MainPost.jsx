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
    ogImage={data?.attributes?.seo?.image}
    twitterCard={data?.attributes?.seo?.twitter_card}
    twitterDescription={data?.attributes?.seo?.twitter_description}
    twitterDomain={data?.attributes?.seo?.twitter_domain}
    twitterImage={data?.attributes?.seo?.twitter_image}
    twitterTitle={data?.attributes?.seo?.twitter_title}
    twitterUrl={data?.attributes?.seo?.twitter_url}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    className="post"
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    {console.log(data, "data")}
    <Source sub={data?.attributes?.title} blog="Blog" />

    <Post data={data} />
  </Layout>
);
