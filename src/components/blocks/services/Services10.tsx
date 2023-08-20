import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import { ServiceCard5 } from 'components/reuseable/service-cards';

const Services10: FC = () => {
  return (
    <div className="row gx-lg-0 gy-10 mb-15 mb-md-18 align-items-center">
      <div className="col-lg-6">
        <div className="row g-6 text-center">
          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12">
                <figure className="rounded mb-6">
                  <img src="/img/photos/se1.jpg" srcSet="/img/photos/se1@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-12">
                <ServiceCard5
                  url="#"
                  icon="uil-monitor"
                  title="Web Development"
                  description="From the first line of code to the final user test, our web development process ensures a seamless, responsive, and unforgettable user experience."
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-lg-12 order-md-2">
                <figure className="rounded mb-6 mb-md-0">
                  <img src="/img/photos/se2.jpg" srcSet="/img/photos/se2@2x.jpg 2x" alt="" />
                </figure>
              </div>

              <div className="col-lg-12">
                <ServiceCard5
                  url="#"
                  title="Mobile App Development"
                  icon="uil-mobile-android"
                  className="card shadow-lg mb-md-6 mt-lg-6"
                  description="Transform your idea into a powerful mobile application. We harness the latest technologies to deliver apps that are intuitive, efficient, and aesthetically pleasing."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-5 offset-lg-1">
        <h2 className="display-4 mb-3">What We Do?</h2>

        <p className="lead fs-lg lh-sm">
        Your vision. Our vertex. Infinite possibilities.
        </p>

        <p>
        VisionVertex is at the intersection of imagination and innovation. Every service we offer is a blend of youthful creativity and tech prowess, ensuring your business stands tall in a digital-first world. We take pride in translating challenges into opportunities, crafting digital narratives that resonate, engage, and drive results. With VisionVertex by your side, envision a digital journey as unique as your brand.
        </p>

        <NextLink title="More Details" href="/about-us" className="btn btn-primary rounded-pill mt-3" />
      </div>
    </div>
  );
};

export default Services10;
