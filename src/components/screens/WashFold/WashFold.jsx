import React from "react";

import { Layout } from "@/components/layout";
import { Description, ImageText, Source, WashProcess } from "@/components/ui";

export const WashFoldScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Wash & Fold"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Wash and Fold" />

    <ImageText
      width={600}
      height={300}
      image="/images/extract.jpg"
      reverse
      description="At Laundry To Go, we understand that managing your laundry can be time-consuming and inconvenient. Our Wash and Fold service is designed to make your life easier by taking care of every step of the laundry process, from washing and drying to folding and packing. Simply drop off your laundry at our Mott St. location or schedule a pickup, and let our professional staff handle the rest."
    />

    <WashProcess />

    <ImageText
      width={600}
      height={400}
      image="/images/asian.jpg"
      reverse
      title="Expert Care for Your Garments"
      description="Our team at Laundry To Go is dedicated to providing exceptional care for your garments. Each member of our staff is trained to handle a variety of fabrics and clothing types, ensuring that your items are treated with the utmost care and expertise. We meticulously sort, wash, dry, and fold your clothes, returning them to you in pristine condition and ready to be put away."
    />

    <ImageText
      width={600}
      height={400}
      image="/images/asian.jpg"
      title="Customizable Options for Your Laundry Needs"
      description="Our team at Laundry To Go is dedicated to providing exceptional care for your garments. Each member of our staff is trained to handle a variety of fabrics and clothing types, ensuring that your items are treated with the utmost care and expertise. We meticulously sort, wash, dry, and fold your clothes, returning them to you in pristine condition and ready to be put away."
    />

    <Description
      color="dark"
      content="Experience the convenience and quality of Laundry To Go's Wash and Fold service. Let our team of professionals handle your laundry needs, so you can focus on the things that matter most. Visit us at 196 Mott St., New York, NY 10012, or call (646) 455-0606 to learn more about our Wash and Fold offerings and schedule a pickup today."
    />
  </Layout>
);
