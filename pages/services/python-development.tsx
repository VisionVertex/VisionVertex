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
      <section className="wrapper bg-soft-primary" style={{ backgroundImage: 'url("/img/newphotos/pexels-luis-gomes-166706-546819.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="container pt-10 pb-20 pt-md-14 pb-md-12 text-center">
    <div className="row">
    <div className="col-xl-7 mx-auto mb-6" style={{ color: 'white' }}>
  <h1 className="display-3 mb-3" style={{ color: 'white' }}>Python Development Services</h1>
  <p className="lead mb-0" style={{ fontSize: '16px' }}>
    Transform your ideas into reality with our comprehensive Python development services. 
    Whether you're looking to build robust web applications, dive into data analytics, 
    harness the power of AI, or automate your workflows, our team of experts is here to 
    deliver innovative solutions tailored to your needs.
  </p>
</div>

    </div>
  </div>
</section>

      {/* ========== main content ========== */}
     




      <section className="wrapper bg-light angled lower-end">
  <div className="container py-4 py-md-4 mb-5">
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <div className="shape bg-line red rounded-circle rellax w-18 h-18" style={{ top: '-2.2rem', left: '-2.4rem' }} />
        <div className="shape rounded bg-soft-primary rellax d-md-block" style={{ width: '85%', height: '80%', right: '-1.5rem', bottom: '-1.8rem' }} />
        <figure className="rounded">
          <img style={{ height: '60%', width: '60%', objectFit: 'cover' }} src="/img/newphotos/web-developer.png" srcSet="/img/newphotos/web-developer.png" alt="web-development" />
        </figure>
      </div>
      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="display-4 mb-3">Web Development with Python</h2>
        <p className="lead fs-lg mb-6">
          Our <b>web development services</b> encompass the creation of robust and scalable web applications using leading-edge Python frameworks such as Django and Flask. We ensure your web application is intuitive, secure, and optimized for performance, providing an exceptional user experience across all devices.
        </p>
      </div>
    </div>
  </div>

  <div className="container py-4 py-md-4 mb-5">
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-lg-5 col-xl-4">
        <h2 className="display-4 mb-3">Data Science & Analytics</h2>
        <p className="lead fs-lg mb-6">
          Unlock the power of your data with our comprehensive <b>data science and analytics services</b>. Leveraging Python's extensive libraries such as Pandas, NumPy, and Matplotlib, we help you extract valuable insights, identify trends, and make informed decisions that drive business growth.
        </p>
      </div>
      <div className="col-md-8 col-lg-6 offset-lg-1 position-relative">
        <div className="shape bg-line red rounded-circle rellax w-18 h-18" style={{ top: '-2.2rem', left: '-2.4rem' }} />
        <div className="shape rounded bg-soft-primary rellax d-md-block" style={{ width: '80%', height: '80%', right: '-1.5rem', bottom: '-1.8rem' }} />
        <figure className="rounded">
          <img style={{ marginLeft: '15%', height: '60%', width: '60%', objectFit: 'cover' }} src="/img/newphotos/data-science.png" srcSet="/img/newphotos/data-science.png" alt="data-science-analytics" />
        </figure>
      </div>
    </div>
  </div>

  <div className="container py-4 py-md-4 mb-5">
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-md-8 col-lg-6 position-relative">
        <div className="shape bg-line red rounded-circle rellax w-18 h-18" style={{ top: '-2.2rem', left: '-2.4rem' }} />
        <div className="shape rounded bg-soft-primary rellax d-md-block" style={{ width: '85%', height: '80%', right: '-1.5rem', bottom: '-1.8rem' }} />
        <figure className="rounded">
          <img style={{ height: '60%', width: '60%', objectFit: 'cover' }} src="/img/newphotos/technology.png" srcSet="/img/newphotos/technology.png" alt="ai-machine-learning" />
        </figure>
      </div>
      <div className="col-lg-5 col-xl-4 offset-lg-1">
        <h2 className="display-4 mb-3">AI & Machine Learning</h2>
        <p className="lead fs-lg mb-6">
          Empower your business with cutting-edge <b>AI and machine learning solutions</b>. Our expert team specializes in developing and integrating AI solutions using industry-leading Python frameworks such as TensorFlow, PyTorch, and scikit-learn.
        </p>
      </div>
    </div>
  </div>

  <div className="container py-4 py-md-4 mb-5">
    <div className="row gy-10 gy-sm-13 gx-lg-3 align-items-center mb-14 mb-md-17 mb-lg-19">
      <div className="col-lg-5 col-xl-4">
        <h2 className="display-4 mb-3">Automation & Scripting</h2>
        <p className="lead fs-lg mb-6">
          Streamline your workflows and boost productivity with our <b>automation and scripting services</b>. Our team of Python experts specializes in developing custom scripts and automation solutions that automate repetitive tasks, eliminate manual errors, and free up valuable time.
        </p>
      </div>
      <div className="col-md-8 col-lg-6 offset-lg-1 position-relative">
        <div className="shape bg-line red rounded-circle rellax w-18 h-18" style={{ top: '-2.2rem', left: '-2.4rem' }} />
        <div className="shape rounded bg-soft-primary rellax d-md-block" style={{ width: '80%', height: '100%', right: '-1.5rem', bottom: '-1.8rem' }} />
        <figure className="rounded">
          <img style={{ height: '60%', width: '60%', objectFit: 'cover' }} src="/img/newphotos/process.png" srcSet="/img/newphotos/process.png" alt="automation-scripting" />
        </figure>
      </div>
    </div>
  </div>
</section>



   
       
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
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default pythonDev;