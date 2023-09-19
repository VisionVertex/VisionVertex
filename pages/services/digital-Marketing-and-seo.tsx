import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //

import { Team3, Team6, Team8 } from 'components/blocks/team';
import { Hero1, Hero10, Hero15 } from 'components/blocks/hero';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8, Footer9 } from 'components/blocks/footer';
import { Process2, Process7 } from 'components/blocks/process';
import { Contact7, Contact9 } from 'components/blocks/contact';
import { CTA4, CTA5 } from 'components/blocks/call-to-action';
import { Testimonial5 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/services';
import * as Alls from 'components/blocks/faq';
import * as Allss from 'components/blocks/contact';

const digital: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="wrapper bg-soft-primary">
        <Navbar
          // fancy
          social
          logoAlt="logo-purple"
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
        />
      </header>
      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary mb-10">
          {/* <div className="container pt-10 pb-20 pt-md-14 pb-md-12 text-center">
          <div className="row">
            <div className="col-xl-5 mx-auto mb-6">
              <h1 className="display-4 mb-3">SEO & Digital Marketing </h1>
              <p className="lead mb-0">Your vision. Our vertex. Infinite possibilities.</p>
            </div>
          </div>
        </div> */}
          <Hero1 />
        </section>
        {/* ========== main content ========== */}

        {/* ========== hero sections ========== */}

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-1 py-md-1 mb-5">
            <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
              <div className="col-md-8 col-lg-6 position-relative">
                <div
                  className="shape bg-line red rounded-circle rellax w-18 h-18"
                  style={{ top: '-2.2rem', left: '-2.4rem' }}
                />

                <div
                  className="shape rounded bg-soft-primary rellax d-md-block"
                  style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
                />

                <figure className="rounded">
                  <img src="/img/newphotos/seo2.jpg" srcSet="/img/newphotos/seo2.jpg" alt="how-work" />
                </figure>
              </div>

              <div className="col-lg-5 col-xl-4 offset-lg-1">
                <h2 className="display-4 mb-3">How SEO Works?</h2>
                <p className="lead fs-lg mb-6">
                  Boost your online presence with our expert SEO strategies. We optimize your content to elevate its
                  search engine rankings, driving more organic traffic to your site{' '}
                  <b className="text-dark">through keyword research, link-building, and advanced on-page techniques</b>,
                  we ensure your business captures and engages its online audience effectively.
                </p>

                {/* {processList3.map((item) => (
          <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-primary pe-none me-5" />
        ))} */}
              </div>
            </div>

          </div>
          {/* digital marketing  */}
          <div className="container py-1 py-md-1 mb-5">
            <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
             

              <div className="col-lg-5 col-xl-4 ">
                <h2 className="display-4 mb-3">Digital Marketing ?</h2>
                <p className="lead fs-lg mb-6">
                Steer your brand's online journey with our strategic digital marketing. Beyond just online visibility, we focus on reaching and engaging your target audience from <b className='text-dark'>PPC (Pay-Per-Click) campaigns to content marketing</b>, our tailored, data-driven strategies ensure impactful interactions and measurable growth.
                </p>

                {/* {processList3.map((item) => (
          <ProcessList2 {...item} key={item.no} className="icon btn btn-circle btn-primary pe-none me-5" />
        ))} */}
              </div>
              <div className="col-md-8 col-lg-6 offset-lg-1 position-relative">
                <div
                  className="shape bg-line red rounded-circle rellax w-18 h-18"
                  style={{ top: '-2.2rem', left: '-2.4rem' }}
                />

                <div
                  className="shape rounded bg-soft-primary rellax d-md-block"
                  style={{ width: '85%', height: '90%', right: '-1.5rem', bottom: '-1.8rem' }}
                />

                <figure className="rounded">
                  <img src="/img/newphotos/seo.jpg" srcSet="/img/newphotos/seo.jpg" alt="how-work" />
                </figure>
              </div>
            </div>

          </div>
        </section>
      

        <CTA4 />

      </main>
    
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default digital;
