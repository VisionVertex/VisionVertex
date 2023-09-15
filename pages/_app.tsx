import Head from 'next/head';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';

// Add your other import statements here

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // added bootstrap functionality
  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  // scroll animation added
  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  // manage loading status
  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IT Solutions - VisionVertex</title>
        <meta name="description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        <meta name="keywords" content="IT solutions, technology, software, consulting" />
        <meta name="author" content="VisionVertex" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#007bff" />

        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="IT Solutions - VisionVertex" />
        <meta property="og:description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        {/* Replace with your company's logo image URL */}
        <meta property="og:image" content="/img/myLogo/logo2.png" />
        <meta property="og:image:secure_url" content="/img/myLogo/logo2.png" />
        <meta property="og:image:width" content="1200" /> {/* Replace with the width of your logo image */}
        <meta property="og:image:height" content="630" /> {/* Replace with the height of your logo image */}
        <meta property="og:url" content="http://visionvertex.com" /> {/* Replace with your website URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Solutions - VisionVertex" />
        <meta name="twitter:description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        <meta name="twitter:image" content="/img/myLogo/logo2.png" /> {/* Replace with your company's logo image URL */}
        <meta name="twitter:creator" content="@VisionVertex" /> {/* Replace with your Twitter handle */}
        
        {/* Additional SEO-related meta tags */}
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_SITE_VERIFICATION_CODE" />
        
        {/* Structured data for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "VisionVertex",
              "url": "http://visionvertex.com",
              "logo": "http://visionvertex.com/img/myLogo/logo2.png",
              "description": "Providing cutting-edge IT solutions for businesses and individuals."
            }
          `}
        </script>
      </Head>

      <ThemeProvider>
        {/* <div className="page-loader" /> */}
        {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
