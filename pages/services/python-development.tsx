import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import {  Hero27 } from 'components/blocks/hero';
import { Navbar } from 'components/blocks/navbar';
import { Footer8, Footer9 } from 'components/blocks/footer';

import PageProgress from 'components/common/PageProgress';
import { Services2 } from 'components/blocks/services';
import { Facts1 } from 'components/blocks/facts';


const pythonDev: NextPage = () => {
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header ========== */}

      <header className="wrapper bg-soft-light">
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
          <Hero27 />
        </section>
        {/* ========== main content ========== */}

        {/* ========== hero sections ========== */}

        <section className="wrapper bg-light angled lower-end">
          <div className="container py-1 py-md-1">
          

            {/* ========== process section ========== */}
            {/* <Process7 /> */}
          </div>
        <Services2/>
        <Facts1/>
        </section>
        {/* ========== process section ==========    */}
       

       
      </main>

    
     
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default pythonDev;
