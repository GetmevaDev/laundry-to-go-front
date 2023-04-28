import React from "react";

import { PricingScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export async function getStaticProps() {
  const {
    data: { attributes },
  } = await fetchAPI("pricing-page?populate=deep");

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

export default function PricingPage({ attributes }) {
  return (
    <PricingScreen
      attributes={attributes}
      image={attributes?.banner?.image?.data?.attributes?.url}
      titleBanner={attributes?.banner?.title}
      descriptionBanner={attributes?.banner?.description}
      buttonLeft={attributes?.banner?.buttons_links?.button_left_text}
      buttonRight={attributes?.banner?.buttons_links?.button_right_text}
    />
  );
}
