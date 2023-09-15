import { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
// -------- custom component -------- //
import { Hero7, Hero9 } from 'components/blocks/hero';
import { Facts6 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer3, Footer8 } from 'components/blocks/footer';
import { Services1, Services10 } from 'components/blocks/services';
import { About7, About8 } from 'components/blocks/about';
import { Portfolio2 } from 'components/blocks/portfolio';
import { Testimonial8 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';
import { FAQ1 } from 'components/blocks/faq';

const Home: NextPage = () => {


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
        <meta property="og:image:secure_url" content="/img/myLogo/logo2.png"/>

               <meta property="og:image" content="/img/myLogo/logo2.png"/>
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
      </Head>
      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          fancy
          social
          logoAlt="logo-purple"
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        {/* <Hero7 /> */}
    <Hero9 />

        <section className="wrapper bg-light">
          <div className="container">
            {/* ========== what we do section ========== */}
          
            <Services10 />

            {/* ========== join our community section ========== */}
            <Facts6 />
          </div>

          {/* ========== our recent project section ========== */}
          <Portfolio2 />
        </section>

        <section className="wrapper bg-light">


            
    
          <div className="container pb-8 pb-lg-10">
            {/* ========== have perfect section ========== */}
            {/* <About8 /> */}

            {/* ========== why choose us section ========== */}
            <About7 />

            {/* ========== happy customer section ========== */}
            <Testimonial8  />

            <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <FAQ1 />
        </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8  />
    </Fragment>
  );
};

export default Home;
