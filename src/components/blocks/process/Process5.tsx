import { FC } from 'react';
// -------- data -------- //
import { processList6 } from 'data/process';

const Process5: FC = () => {
  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <figure>
          <img alt="how it work" src="/img/photos/device.png" srcSet="/img/photos/device@2x.png 2x" />
        </figure>
      </div>

      <div className="col-lg-6">
        <h2 className="fs-15 text-uppercase text-muted mb-3">How It Works</h2>
        <h3 className="display-4 mb-5">Transform your idea into a powerful mobile application.</h3>
        <p className="mb-8">
        Empower your business with cutting-edge mobile applications tailored to your specific needs. Our team takes a holistic approach to app development, ensuring solutions that are not only high-performing and responsive but also user-centric. As we usher into an increasingly mobile-driven era, position your business at the forefront, ready to cater to your audience's every demand.
        </p>
        <p className="mb-8">
        Dive deep into the world of mobile app innovation with our expertise spanning across renowned platforms and frameworks. Specializing in Android and iOS, we harness the capabilities of powerful languages like Swift and Kotlin. Moreover, for cross-platform needs, our mastery extends to popular frameworks such as React Native, Flutter etc. Partner with us and leverage the latest in mobile technology to ensure your app stands out.
        </p>
        {/* <div className="row gy-6 gx-xxl-8 process-wrapper">
          {processList6.map(({ id, title, description, Icon, color }) => (
            <div className="col-md-4" key={id}>
              {<Icon className={`icon-svg-sm text-${color} mb-3`} />}
              <h4 className="mb-1">{title}</h4>
              <p className="mb-0">{description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Process5;
