import React from "react";

import { Layout } from "@/components/layout";
import {
  BlueDescription,
  Description,
  ImageText,
  Source,
} from "@/components/ui";

export const PricingScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="Pricing"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="Pricing" />

    <ImageText
      width={600}
      height={300}
      reverse
      image="/images/extract.jpg"
      description="Laundry To Go is proud to offer exceptional commercial laundry services, catering to businesses of all sizes and industries. With our state-of-the-art equipment, experienced staff, and commitment to quality, we'll ensure that your organization's laundry needs are met with professionalism and efficiency."
    />

    <BlueDescription
      content="Every business has unique laundry requirements, and we're here to provide customized solutions that fit your specific needs. Whether you run a hotel, restaurant, fitness center, or any other establishment, our team will work closely with you to develop a laundry plan that suits your business and budget."
      title="Tailored Solutions for Your Business"
      color="blue"
    />

    <ImageText
      width={600}
      height={400}
      reverse
      title="High-Quality Cleaning and Sanitization"
      image="/images/asian.jpg"
      description="At Laundry To Go, we understand that cleanliness and hygiene are paramount for your business. That's why we use the best detergents, sanitizing agents, and washing techniques to ensure that your linens, uniforms, and other laundry items are not only clean but also meet the highest standards of hygiene.
"
    />

    <ImageText
      width={600}
      height={400}
      image="/images/asian.jpg"
      title="Efficient and Reliable Service"
      description="We know that businesses need efficient and reliable laundry services to ensure smooth operations. Our team is dedicated to providing timely and consistent service, so you never have to worry about laundry delays affecting your business. With Laundry To Go as your commercial laundry partner, you can trust that your laundry will be taken care of promptly and professionally."
    />

    <Description
      content="Let Laundry To Go be your trusted partner for all your commercial laundry needs. Experience the convenience, reliability, and quality that our services provide, and focus on what matters most—your business. Contact us at (646) 455-0606 or visit our location at 196 Mott St., New York, NY 10012 to discuss your organization's laundry requirements and discover how we can best serve you."
      color="dark"
    />
  </Layout>
);
