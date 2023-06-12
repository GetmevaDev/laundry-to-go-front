import React from "react";

import { Typography } from "..";

import { VisitUsItem } from "./Item/VisitUsItem";

import styles from "./VisitUs.module.scss";

export const VisitUs = ({ visit }) => (
  <div className={styles.visit_us}>
    <Typography tag="h2" color="black" size="medium" className={styles.title}>
      {visit?.Title}
    </Typography>

    <div className={styles.visit}>
      <VisitUsItem
        title={visit?.visit_item?.title}
        description={visit?.visit_item?.description}
        alt={visit?.visit_item?.alt}
        image={visit?.visit_item?.image?.data?.attributes?.url}
      />
      <VisitUsItem
        title={visit?.visit_item_2?.title}
        description={visit?.visit_item_2?.description}
        alt={visit?.visit_item_2?.description}
        image={visit?.visit_item_2?.image?.data?.attributes?.url}
      />
      <VisitUsItem
        title={visit?.visit_item_3?.title}
        description={visit?.visit_item_3?.description}
        image={visit?.visit_item_3?.image?.data?.attributes?.url}
        telLeft={visit?.visit_item_3?.tel_left}
        telRight={visit?.visit_item_3?.tel_right}
      />
    </div>
  </div>
);
