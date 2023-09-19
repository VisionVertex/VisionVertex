import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //

import { Team3, Team6, Team8 } from 'components/blocks/team';
import { Hero10, Hero15, Hero6 } from 'components/blocks/hero';
import { About6 } from 'components/blocks/about';
import { Facts4, Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8, Footer9 } from 'components/blocks/footer';
import { Process5, Process7, Process8 } from 'components/blocks/process';
import { Contact7, Contact9 } from 'components/blocks/contact';
import { CTA5 } from 'components/blocks/call-to-action';
import { Testimonial5 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/services';
import * as Alls from 'components/blocks/faq';
import * as Allss from 'components/blocks/contact';

const mobiledev: NextPage = () => {

  
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
      <section 
       style={{ backgroundImage: 'url(/img/newphotos/app3-min.jpg)',
       backgroundRepeat:'no-repeat',
       backgroundSize:"cover",
       backgroundPosition:'center center',
        height:'20rem',
        // width:'100%'
       //  objectFit:'contain'
      
      }}
      
      className="wrapper bg-soft-primary mb-5">
        <div 
       
        
        className="container pt-10 pb-20 pt-md-14 pb-md-12 text-center">
          <div className="row">
            <div className="col-xl-5 mx-auto mb-6">
              <h1 className="display-4 mb-3 text-light">Mobile App Development </h1>
              <p className=" mb-0 text-light">Transform your idea into a powerful mobile application.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== main content ========== */}
   
        {/* ========== hero sections ========== */}
      

        <section className="wrapper bg-light">
          <div className="container py-1 py-md-1">
      
          <Process5 />
 
          </div>
        </section>
      {/* ========== process section ==========    */}

      <div className="pt-10 pt-md-5 pb-10 pb-md-10">
              <Hero6/>
        </div>

        {/* <img src="/img/web-image.png"  alt="oracle" /> */}
       
  {/* ========== our community section ========== */}
  {/* <Contact9 /> */}

        {/* ========== testimonial section ========== */}
        {/* <Testimonial5 /> */}

        {/* ========== team section ========== */}


        {/* ========== facts section ========== */}
        {/* <Facts5 /> */}

        {/* ========== contact section ========== */}
        {/* <Contact7 /> */}

        {/* ========== call to action section ========== */}
    
      </main>
    
       
       
        {/* <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
          <All.Services9 />
        </div>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <Alls.FAQ1 />
        </div> */}
        {/* <div className="pb-13 pb-md-15">
          <Allss.Contact12 />
        </div> */}
        {/* <CTA5 /> */}
        <Facts4/>
        <Allss.Contact11/>
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default mobiledev;