import React from "react";

import { ContactUsScreen } from "@/components/screens";

export default function ContactUsPage() {
  return (
    <ContactUsScreen
      image="/images/contactusbanner.jpg"
      titleBanner="Contact us"
      buttonLeft="Schedule a Pickup"
      buttonRight="Click to call"
    />
  );
}
