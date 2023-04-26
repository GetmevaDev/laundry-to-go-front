import React from "react";

import { Layout } from "@/components/layout";
import { Choose, Competitive, HomeBanner, Map, VisitUs } from "@/components/ui";

export const HomeScreen = () => (
  <Layout title="Home" description="description" size="nolayout">
    <VisitUs />
    <Choose />

    <Competitive />
    <Map />
  </Layout>
);
