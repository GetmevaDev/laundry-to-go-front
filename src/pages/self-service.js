import React from "react";

import { SelfServiceScreen } from "@/components/screens";

export default function SelfServicePage() {
  return (
    <SelfServiceScreen
      image="/images/selfbanner.jpg"
      titleBanner="Manhattan’s Premier Laundromat"
      descriptionBanner="Take Control of Your Laundry Experience"
      buttonLeft="Schedule a Pickup"
      buttonRight="Click to call"
    />
  );
}
