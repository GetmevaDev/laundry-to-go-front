import React from "react";

import { AboutScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("about-page?populate=deep");

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function AboutPage({ attributes }) {
  return (
    <AboutScreen
      attributes={attributes}
      image={attributes?.banner?.image?.data?.attributes?.url}
      titleBanner={attributes?.banner?.title}
      descriptionBanner={attributes?.banner?.description}
      buttonLeft={attributes?.banner?.buttons_links?.button_left_text}
      buttonRight={attributes?.banner?.buttons_links?.button_right_text}
      buttonLeftLink={attributes?.banner?.buttons_links?.button_link_left}
      buttonRightLink={attributes?.banner?.buttons_links?.button_link_right}
    />
  );
}
