import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Team3, Team8 } from 'components/blocks/team';
import { Navbar } from 'components/blocks/navbar';
import { Footer3, Footer8 } from 'components/blocks/footer';
import { Clients1 } from 'components/blocks/clients';
import { Process8 } from 'components/blocks/process';
import Carousel from 'components/reuseable/Carousel';
import ProgressList from 'components/common/ProgressList';
import FigureImage from 'components/reuseable/FigureImage';
import NextLink from 'components/reuseable/links/NextLink';
import AccordionList from 'components/common/AccordionList';
import { TestimonialCard2 } from 'components/reuseable/testimonial-cards';
// -------- icons component -------- //
import Target from 'icons/lineal/Target';
import BarChart from 'icons/lineal/BarChart';
import Megaphone from 'icons/lineal/Megaphone';
import SettingsThree from 'icons/lineal/SettingsThree';
// -------- data -------- //
import { testimonialList2 } from 'data/testimonial-list';
import Code from 'icons/solid-mono/Code';
import SeoTwo from 'icons/solid/SeoTwo';
import Devices from 'icons/solid-mono/Devices';
import GlobeTwo from 'icons/solid-mono/GlobeTwo';
const serviceList2 = [
  {
    id: 1,
    title: 'Web Development',
    Icon: <Code />,
    description: `From the first line of code to the final user test, our web development process ensures a seamless, responsive, and unforgettable user experience.`
  },
  {
    id: 2,
    title: 'Mobile App Development',
    Icon: <Devices/>,
    description: `Transform your idea into a powerful mobile application. We harness the latest technologies to deliver apps that are intuitive, efficient, and aesthetically pleasing.`
  },
  {
    id: 3,
    title: 'Python Development',
    Icon: <Code />,
    description: `Elevate your business with VisionVertex's Python expertise. From crafting desktop apps to automated testing and web solutions, our Python prowess delivers innovation and efficiency.`
  },
  {
    id: 4,
    Icon: <GlobeTwo/>,
    title: 'SEO & Digital Marketing',
    description: `Increase your brand's digital footprint. Our marketing strategies are data-driven, ensuring your brand reaches its target audience effectively and climbs the search engine ranks.`
  }
];

const AboutTwo: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          social
          logoAlt="logo-purple"
          navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
        />
      </header>
      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section className="wrapper bg-soft-primary">
          <div className="container pt-10 pb-20 pt-md-14 pb-md-23 text-center">
            <div className="row">
              <div className="col-xl-5 mx-auto mb-6">
                <h1 className="display-1 mb-3">About Us</h1>
                <p className="lead mb-0">Your vision. Our vertex. Infinite possibilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== services section ========== */}
        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-16">
            <div className="row text-center mb-12 mb-md-15">
              <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mt-n18 mt-md-n22">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i8.png"
                    srcSet="/img/illustrations/i8@2x.png 2x"
                  />
                </figure>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
              <div className="col-lg-6 order-lg-2">
                <ProgressList />
              </div>

              <div className="col-lg-6">
                <h3 className="display-5 mb-5">
                  The full service we are offering is specifically designed to meet your business needs and projects.
                </h3>

                <p>
                VisionVertex is at the intersection of imagination and innovation. Every service we offer is a blend of youthful creativity and tech prowess, ensuring your business stands tall in a digital-first world. We take pride in translating challenges into opportunities, crafting digital narratives that resonate, engage, and drive results. With VisionVertex by your side, envision a digital journey as unique as your brand.
                </p>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
              {serviceList2.map(({ id, Icon, title, description }) => (
                <div className="col-md-6 col-lg-3" key={id}>
                  {Icon}
                  <h4>{title}</h4>
                  <p className="mb-2">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

        {/* ========== contact section ========== */}
        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7">
                <figure>
                  <img
                    alt=""
                    className="w-auto"
                    src="/img/illustrations/i5.png"
                    srcSet="/img/illustrations/i5@2x.png 2x"
                  />
                </figure>
              </div>

              <div className="col-lg-5">
                <h3 className="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-location-pin-alt" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Address</h5>
                    <address>Prayagraj,Uttar Pradesh,India</address>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-phone-volume" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone</h5>
                    <p>+91 8081100169</p>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <div>
                    <div className="icon text-primary fs-28 me-4 mt-n1">
                      <i className="uil uil-envelope" />
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-1">E-mail</h5>
                    <p className="mb-0">
                      <a href="mailto: info@visionvertex.com" className="link-body">
                      info@visionvertex.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8  />
    </Fragment>
  );
};

export default AboutTwo;
