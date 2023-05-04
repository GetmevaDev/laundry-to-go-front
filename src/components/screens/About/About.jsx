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
    title="About"
    description="description"
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
