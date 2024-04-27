import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';

const Hero27: FC = () => {
  return (
    <section
      className="wrapper image-wrapper bg-cover bg-image bg-xs-none bg-gray"
      style={{ backgroundImage: 'url(/img/photos/bg37.jpg)' }}
    >
      <div className="container pt-17 pb-15 py-sm-17 py-xxl-20">
        <div className="row">
          <div
            className="col-sm-6 col-xxl-5 text-center text-sm-start"
            data-cues="slideInDown"
            data-group="page-title"
            data-interval="-200"
            data-delay="500"
          >
            <h2 className="display-1 fs-56 mb-4 mt-0 mt-lg-5 ls-xs pe-xl-5 pe-xxl-0">
              We transform idea into  <span className="underline-3 style-3 yellow">reality</span>
            </h2>
            <p className="lead fs-23 lh-sm mb-7 pe-lg-5 pe-xl-5 pe-xxl-0">
            VisionVertex specializes in Python development — crafting web solutions, apps,
            AI and more. Let's bring your ideas to life with efficiency and innovation.
            </p>

            <div>
              <NextLink title="Contact Us" href="/contact" className="btn btn-lg btn-primary rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero27;
