import Head from "next/head";
import React from "react";

const Meta = ({
  title,
  description,
  children,
  twitterCard,
  twitterDomain,
  twitterUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  ogImage,
}) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/svg/logo.svg" />
      <link rel="canonical" href={twitterUrl} />
      {description ? (
        <>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta property="og:image" content={ogImage} />

          <meta name="twitter:card" content={twitterCard} />
          <meta property="twitter:domain" content={twitterDomain} />
          <meta property="twitter:url" content={twitterUrl} />
          <meta name="twitter:title" content={twitterTitle} />
          <meta name="twitter:description" content={twitterDescription} />
          <meta name="twitter:image" content={twitterImage} />
        </>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
    </Head>
    {children}
  </>
);
export default Meta;
