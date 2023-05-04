import React from "react";

import { Layout } from "@/components/layout";
import { Description, ImageText, Source, WashProcess } from "@/components/ui";

export const WashFoldScreen = ({
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
    title="Wash & Fold"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    buttonLeftLink={buttonLeftLink}
    buttonRightLink={buttonRightLink}
    page="center"
  >
    <Source sub="Wash and Fold" />

    <ImageText
      title={attributes?.block_item?.title}
      description={attributes?.block_item?.description}
      reverse={attributes?.block_item?.reverse}
      width={600}
      height={300}
      image={attributes?.block_item?.image?.data?.attributes?.url}
    />

    <WashProcess cards={attributes?.cards} />

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
      color={attributes?.description?.bg_color}
      content={attributes?.description?.description}
    />
  </Layout>
);
