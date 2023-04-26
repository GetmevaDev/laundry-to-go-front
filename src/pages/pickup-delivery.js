import React from "react";

import { PickupScreen, SelfServiceScreen } from "@/components/screens";

export default function PickupDeliveryPage() {
  return (
    <PickupScreen
      image="/images/pickupbanner.jpg"
      titleBanner="Pickup & Delivery Services in Manhattan"
      descriptionBanner="Experience Laundry Service Made Easy"
      buttonLeft="Schedule a Pickup"
      buttonRight="Click to call"
    />
  );
}
