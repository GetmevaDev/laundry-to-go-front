import React from "react";

import { AboutScreen } from "@/components/screens";

export default function AboutPage() {
  return (
    <AboutScreen
      image="/images/aboutbanner.jpg"
      titleBanner="About Laundry To Go"
      descriptionBanner="Your Trusted Partner for High-Quality Laundry Services in Manhattan"
      buttonLeft="Schedule a Pickup"
      buttonRight="Click to call"
    />
  );
}
