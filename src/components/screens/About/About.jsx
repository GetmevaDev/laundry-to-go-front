import React from "react";

import { Layout } from "@/components/layout";
import { Choose, HomeBanner, VisitUs } from "@/components/ui";

export const AboutScreen = () => (
  <Layout title="About" description="description">
    <HomeBanner />
    <VisitUs />
    <Choose />
  </Layout>
);
