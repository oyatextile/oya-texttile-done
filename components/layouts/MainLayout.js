import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

import React from "react";
import Footer from "../Footer";
import Simple from "../NavBarTest";
import HTMLRenderer from "react-html-renderer";

const innerHTML = `
<link rel="icon" type="image/x-icon" href="/images/oyatextile.gif" />
<meta name="facebook-domain-verification" content="fqb5zdsjhryy9gkj89jg5m1qtjad1l"/>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '514828389347808');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=514828389347808&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-130194712-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-130194712-1');
</script>
<!-- Global site tag (gtag.js) - Google Ads: 769829654 -->

<script async src="https://www.googletagmanager.com/gtag/js?id=AW-769829654"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-769829654');
</script>

<!-- Event snippet for Contact-OYA conversion page
In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
<script>
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-769829654/F3FtCIqD2_8BEJbWiu8C',
      'event_callback': callback
  });
  return false;
}
</script>
`;

function MainLayout({ children }) {
  return (
    <Container as="main" maxW="full" bg="white" p="0" pos="relative">
      <Head>
        <HTMLRenderer html={innerHTML} />
      </Head>
      <Simple />
      <Box w="100%">{children}</Box>
      <Footer />
    </Container>
  );
}

export default MainLayout;
