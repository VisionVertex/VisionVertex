import { FC } from 'react';
import { slideInDownAnimate, zoomInAnimate } from 'utils/animation';
import NextLink from 'components/reuseable/links/NextLink';

const Hero10: FC = () => {
  return (
    <div className="row gx-lg-0 gx-xl-8 gy-10 gy-md-13 gy-lg-0 mb-7 mb-md-10 mb-lg-16 align-items-center">
      <div
        className="col-md-8 offset-md-2 col-lg-6 offset-lg-1 position-relative order-lg-2"
        style={zoomInAnimate('0ms')}
      >
        <div className="shape bg-dot primary rellax w-17 h-19" style={{ top: '-1.7rem', left: '-1.5rem' }} />
        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: '85%', height: '90%', right: '-0.8rem', bottom: '-1.8rem' }}
        />

        <figure className="rounded">
          <img src="/img/oracle-partner-logo.png"  alt="oracle" />
          <img src="/img/hero/web-image.jpg"  alt="oracle" />
        </figure>
        
      </div>

      <div className="col-lg-5 mt-lg-n10 text-center text-lg-start">
        <p className="display-3 mb-5" style={slideInDownAnimate('600ms')}>
        Our Service
        </p>

        <h2 className="lead fs-14  mb-7  px-lg-0" style={slideInDownAnimate('900ms')}>

        At Visionvertex, we take pride in offering top-notch web development services tailored to meet your unique business needs. With a team of experienced and skilled developers, we specialize in crafting dynamic, responsive, and user-friendly websites and web applications that not only look great but also deliver exceptional performance. Our expertise spans a wide range of technologies and frameworks, ensuring that we can bring your digital vision to life, whether you're looking to create an engaging e-commerce platform, a corporate website, or a custom web-based solution. We are dedicated to staying up-to-date with the latest industry trends and best practices, ensuring that your project benefits from the latest innovations in web development. Partner with us to elevate your online presence and provide your audience with seamless and engaging digital experiences.</h2>
       
      </div>
    </div>
  );
};

export default Hero10;
