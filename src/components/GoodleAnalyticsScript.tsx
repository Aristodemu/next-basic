import Script from "next/script";
import { memo } from "react";
import type { FC } from "react";

interface IProps {}
const GoodleAnalyticsScript: FC<IProps> = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
};
export default memo(GoodleAnalyticsScript);
