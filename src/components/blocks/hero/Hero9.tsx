import { FC } from 'react';
import Typewriter from 'typewriter-effect';
import { fadeInAnimate, slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero9: FC = () => {
  // typewriter options
  const OPTIONS = {
    loop: true,
    autoStart: true,
    strings: ["Precision",
    "Passion",
    "Progress"]
  };

  return (
    <section className="wrapper bg-light mb-15">
      <div className="container-card">
        <div
          className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mt-2 mb-5"
          style={{ backgroundImage: 'url(/img/photos/bg22.png)' }}
        >
          <div className="card-body py-14 px-0">
            <div className="container">
              <div className="row gx-md-8 gx-xl-12 gy-10 align-items-center text-center text-lg-start">
                <div className="col-lg-6">
                <h1 className="display-1 mb-5 mx-md-10 mx-lg-0" style={slideInDownAnimate('600ms')}>
              VisionVertex belives in   <br />
              <span className="typer text-primary text-nowrap">
                <Typewriter options={OPTIONS} />
              </span>
            </h1>

            <p className="lead fs-lg mb-7" style={slideInDownAnimate('900ms')}>
            VisionVertex IT Solutions exceeded our expectations with their outstanding work on Staykr.com. Their expertise in JavaScript, Node, and React brought our hotel management project to life. The team's dedication, attention to detail, and commitment to delivering excellence make them a standout choice for any IT project. We are extremely satisfied with the results and look forward to future collaborations.

            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <span style={slideInDownAnimate('1200ms')}>
                <NextLink title="Projects" href="/projects" className="btn btn-md btn-gradient gradient-1 rounded me-2" />
              </span>

              <span style={slideInDownAnimate('1500ms')}>
                <NextLink title="Contact Us" href="/contact" className="btn btn-md btn-gradient gradient-1 rounded me-2" />
              </span>
            </div>
            
                </div>

                <div className="col-lg-6">
                  <img
                    alt="demo"
                    className="img-fluid mb-n18"
                    src="/img/illustrations/3d6.png"
                    srcSet="/img/illustrations/3d6@2x.png 2x"
                    style={fadeInAnimate('300ms')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero9;
