import React from "react";

import { Layout } from "@/components/layout";
import { Contact, ContactInfo, Source } from "@/components/ui";

export const ContactUsScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Contact us"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Contact us" />

    <ContactInfo />
  </Layout>
);
