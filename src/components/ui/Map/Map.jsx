import React from "react";

import { Contact } from "..";

import styles from "./Map.module.scss";

export const Map = ({ contact }) => (
  <div className={styles.map}>
    <div className={styles.iframe}>
      <iframe
        title="map"
        src={contact?.href_map}
        width="100%"
        className={styles.map_frame}
        height="450"
        style={{ border: 0, borderRadius: "50px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className={styles.contact}>
      <Contact contact={contact} />
    </div>
  </div>
);
