import React from "react";

import { Layout } from "@/components/layout";
import { Banner, Choose, Competitive, Map, VisitUs } from "@/components/ui";

export const HomeScreen = ({
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
    size="nolayout"
    page="right"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    descriptionBanner={descriptionBanner}
  >
    <VisitUs visit={attributes?.Visit} />
    <Choose choose={attributes?.Choose} />

    <Competitive competitive={attributes?.competitive} />
    <Map contact={attributes?.contact_us} />
  </Layout>
);
