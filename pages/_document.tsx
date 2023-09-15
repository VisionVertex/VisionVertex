import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class SandBox extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/img/myLogo/logo2.png" type="image/png" />
          <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IT Solutions - VisionVertex</title>
        <meta name="description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        <meta name="keywords" content="IT solutions, technology, software, consulting" />
        <meta name="author" content="VisionVertex" />
        <meta name="robots" content="index, follow" />
  
        <meta name="theme-color" content="#007bff" />
        <meta name="google-site-verification" content="zXqzAkOCf4pTrIzVknRoQqNygbqPcIRRRiglP2kL5Vo" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="IT Solutions - VisionVertex" />
        <meta property="og:description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        {/* Replace with your company's logo image URL */}
        <meta property="og:image" content="/img/myLogo/logo2.png" />
        <meta property="og:image:secure_url" content="/img/myLogo/logo2.png"/>

        <meta property="og:image" content="https://visionvertex.com/img/myLogo/logo2.png" />

        <meta property="og:image:width" content="120" /> {/* Replace with the width of your logo image */}
        <meta property="og:image:height" content="630" /> {/* Replace with the height of your logo image */}
        <meta property="og:url" content="http://visionvertex.com" /> {/* Replace with your website URL */}
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Solutions - VisionVertex" />
        <meta name="twitter:description" content="Providing cutting-edge IT solutions for businesses and individuals." />
        <meta name="twitter:image" content="/img/myLogo/logo2.png" /> {/* Replace with your company's logo image URL */}
        <meta name="twitter:creator" content="@VisionVertex" /> {/* Replace with your Twitter handle */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// ======================================================================

SandBox.getInitialProps = async (ctx: DocumentContext) => {
  const originalRenderPage = ctx.renderPage;

  // Run the React rendering logic synchronously
  ctx.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    });

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};
