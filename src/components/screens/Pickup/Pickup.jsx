import React from "react";

import { Layout } from "@/components/layout";
import {
  Description,
  ImageText,
  OurWashProcess,
  Source,
  WashProcess,
} from "@/components/ui";

export const PickupScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Pickup & Delivery"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Pickup & Delivery" />

    <ImageText
      width={600}
      height={300}
      reverse
      image="/images/extract.jpg"
      description="Experience ultimate convenience with Laundry To Go's Pickup & Delivery services. We understand that your time is valuable, which is why we offer reliable and efficient laundry pickup and delivery options to make your life easier. Let us handle your laundry needs, so you can focus on more important tasks."
    />

    <OurWashProcess />

    <ImageText
      width={600}
      height={400}
      reverse
      image="/images/asian.jpg"
      title="Options for Flexible Scheduling"
      description="Our team at Laundry To Go is dedicated to providing exceptional care for your garments. Each member of our staff is trained to handle a variety of fabrics and clothing types, ensuring that your items are treated with the utmost care and expertise. We meticulously sort, wash, dry, and fold your clothes, returning them to you in pristine condition and ready to be put away."
    />

    <ImageText
      width={600}
      height={400}
      image="/images/asian.jpg"
      title="Options for Flexible Scheduling"
      description="Our team at Laundry To Go is dedicated to providing exceptional care for your garments. Each member of our staff is trained to handle a variety of fabrics and clothing types, ensuring that your items are treated with the utmost care and expertise. We meticulously sort, wash, dry, and fold your clothes, returning them to you in pristine condition and ready to be put away."
    />

    <Description
      color="dark"
      content="Experience the ease and convenience of Laundry To Go's five-step Pickup & Delivery process. Let our professional team handle your laundry needs, so you can focus on what's important. Visit us at 196 Mott St., New York, NY 10012, or call (646) 455-0606 to learn more about our Pickup & Delivery services and schedule your first pickup today."
    />
  </Layout>
);
