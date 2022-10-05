import React from "react";
import Head from "next/head";

function SeoTags({ seo }: any) {
  const head =`${seo.seoTagsHead}`
  return (
    <>
      <Head>
        {/* <title>Oyahome</title> */}
        {/* <React.Fragment dangerouslySetInnerHTML={{ __html: seo.seoTagsHead }}></React.Fragment> */}
      </Head>
      <p dangerouslySetInnerHTML={{ __html: seo?.seoBody }}></p>
    </>
  );
}

export default SeoTags;
