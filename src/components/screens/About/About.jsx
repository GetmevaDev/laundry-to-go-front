import React from "react";

import { Layout } from "@/components/layout";
import {
  Banner,
  Choose,
  Description,
  HomeBanner,
  ImageText,
  Source,
  VisitUs,
} from "@/components/ui";

export const AboutScreen = ({
  titleBanner,
  descriptionBanner,
  image,
  buttonLeft,
  buttonRight,
}) => (
  <Layout
    title="About"
    description="description"
    image={image}
    titleBanner={titleBanner}
    buttonLeft={buttonLeft}
    buttonRight={buttonRight}
    descriptionBanner={descriptionBanner}
    page="center"
  >
    <Source sub="About Us" />

    <Description
      color="gray"
      content="Laundry To Go is a full-service laundry facility located in the heart of New York City,  in Manhattan, dedicated to providing exceptional laundry services to our valued customers. Our mission is to make laundry day as stress-free and enjoyable as possible, offering a range of services designed to cater to your unique needs and preferences. With our professional staff, state-of-the-art equipment, and commitment to using the best detergents available, we guarantee a laundry experience that exceeds your expectations."
    />

    <ImageText
      width={600}
      height={400}
      reverse
      image="/images/quality.jpg"
      title="Quality at the Core of Our Service"
      description="At Laundry To Go, we believe that quality should never be compromised. That's why we've invested in the latest laundry technology and equipment, ensuring that your garments receive the best care possible. Our machines are meticulously maintained and regularly serviced, guaranteeing that they operate at peak performance to deliver outstanding results."
    />

    <ImageText
      width={600}
      height={400}
      image="/images/quality.jpg"
      title="Premium Detergents for Exceptional Results"
      description="At Laundry To Go, we believe that quality should never be compromised. That's why we've invested in the latest laundry technology and equipment, ensuring that your garments receive the best care possible. Our machines are meticulously maintained and regularly serviced, guaranteeing that they operate at peak performance to deliver outstanding results."
    />

    <ImageText
      width={600}
      height={400}
      reverse
      image="/images/quality.jpg"
      title="Our Professional and Passionate Team"
      description="At Laundry To Go, we believe that quality should never be compromised. That's why we've invested in the latest laundry technology and equipment, ensuring that your garments receive the best care possible. Our machines are meticulously maintained and regularly serviced, guaranteeing that they operate at peak performance to deliver outstanding results."
    />

    <ImageText
      width={600}
      height={400}
      image="/images/quality.jpg"
      title="A Wide Range of Services Tailored to Your Needs"
      description="At Laundry To Go, we believe that quality should never be compromised. That's why we've invested in the latest laundry technology and equipment, ensuring that your garments receive the best care possible. Our machines are meticulously maintained and regularly serviced, guaranteeing that they operate at peak performance to deliver outstanding results."
    />

    <Description
      color="gray"
      title="Join Our Growing Family of Satisfied Customers"
      content="Since opening our doors, Laundry To Go has become a trusted name in the New York City laundry scene, with a reputation for exceptional service, quality, and convenience. We invite you to experience the difference that our dedication to customer satisfaction and meticulous attention to detail can make in your laundry routine. Visit us at our Mott St. location or call (646) 455-0606 to learn more about our services and discover the Laundry To Go difference for yourself."
    />
  </Layout>
);
