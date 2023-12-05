import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import { ServiceCard4 } from 'components/reuseable/service-cards';
// -------- data -------- //
import { serviceList7 } from 'data/service';

const Services9: FC = () => {
  return (
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-lg-2  align-items-center">
      <div className="col-lg-7 order-lg-2">
        <div className="row gx-md-5 gy-5">
          {serviceList7.map(({ id, Icon, color, ...item }) => (
            <ServiceCard4 key={id} Icon={<Icon className={`icon-svg-md text-${color} mb-3`} />} {...item} />
          ))}
        </div>
      </div>

      <div className="col-lg-5">
        <h4 className="fs-15 text-uppercase text-muted mb-3">What We Do?</h4>
      
       <h5>
        Welcome to VisionVertex, where innovation meets excellence. At VisionVertex, we are not just a company; we are a hub of creativity and technological prowess. With a passion for cutting-edge solutions, our team is dedicated to crafting projects that transcend expectations.
        </h5>
       <h5>
        From visionary ideas to impeccable design, we take pride in every endeavor we undertake. Our commitment to delivering top-notch services, be it in web development, mobile applications, or software solutions, defines us. At VisionVertex, we embrace challenges, turning them into opportunities to showcase our expertise and elevate your digital presence.
        </h5>
       <h5>
        Explore our world of technology where ideas flourish, designs captivate, and solutions redefine the norm. Join us on a journey of innovation, where your vision meets the precision of VisionVertex. Your success is our mission, and we're ready to bring your ideas to life. Welcome to VisionVertex—where every project is a masterpiece. 
        </h5>
        <NextLink title="More Details" href="#" className="btn btn-navy rounded-pill mt-3" />
      </div>
    </div>
  );
};

export default Services9;
