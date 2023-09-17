import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //

import { Team3, Team6, Team8 } from 'components/blocks/team';
import { Hero10, Hero15 } from 'components/blocks/hero';
import { About6 } from 'components/blocks/about';
import { Facts5 } from 'components/blocks/facts';
import { Navbar } from 'components/blocks/navbar';
import { Footer8, Footer9 } from 'components/blocks/footer';
import { Process7 } from 'components/blocks/process';
import { Contact7, Contact9 } from 'components/blocks/contact';
import { CTA5 } from 'components/blocks/call-to-action';
import { Testimonial5 } from 'components/blocks/testimonial';
import PageProgress from 'components/common/PageProgress';

import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/services';
import * as Alls from 'components/blocks/faq';
import * as Allss from 'components/blocks/contact';

const pythonDev: NextPage = () => {

  
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
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-20 pt-md-14 pb-md-12 text-center">
          <div className="row">
            <div className="col-xl-5 mx-auto mb-6">
              <h1 className="display-3 mb-3">Python Development </h1>
              <p className="lead mb-0">Your vision. Our vertex. Infinite possibilities.</p>
            </div>
          </div>
        </div>
      </section>
      {/* ========== main content ========== */}
   
        {/* ========== hero sections ========== */}
      

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-1 py-md-1">
      
         
        
          <div className="container pt-6 pt-md-6 pb-13 pb-md-15 mb-n15">
          <All.Services8 />
        </div>
           
             
 
            {/* ========== process section ========== */}
            {/* <Process7 /> */}
          </div>
        </section>
      {/* ========== process section ==========    */}

      <div className="pt-10 pt-md-5 pb-10 pb-md-10">
              <All.Services1 />
        </div>

        {/* <img src="/img/web-image.png"  alt="oracle" /> */}
       
  {/* ========== our community section ========== */}
  <Contact9 />

        {/* ========== testimonial section ========== */}
        {/* <Testimonial5 /> */}

        {/* ========== team section ========== */}


        {/* ========== facts section ========== */}
        {/* <Facts5 /> */}

        {/* ========== contact section ========== */}
        {/* <Contact7 /> */}

        {/* ========== call to action section ========== */}
    
      </main>
    
       
       
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
          <All.Services9 />
        </div>
        <div className="container pt-15 pt-md-17 pb-13 pb-md-15">
          <Alls.FAQ1 />
        </div>
        {/* <div className="pb-13 pb-md-15">
          <Allss.Contact12 />
        </div> */}
        <CTA5 />
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default pythonDev;