import { Adsense } from "@ctrl/react-adsense";
import React from "react";

function Ads() {
  return (
    //   first one
    <Adsense
      data-ad-client="ca-pub-7640562161899788"
      data-ad-slot="7259870550"
      style={{ display: "block" }}
      layout="in-article"
      data-ad-format="fluid"
      className="adsbygoogle"
      data-full-width-responsive="true"
    />
  );
}

export default Ads;
