import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
import NextLink from 'components/reuseable/links/NextLink';
// -------- data -------- //
import { carouselImages } from 'data/demo-7';
import { getHomePageSliderImages } from '../../../../service/api/api';
import { StrapiArrayImageData, StrapiImageData } from '../../../../pages/projects/project.types';

const Portfolio2 = () => {
  const [sliderImages, setSliderImages] = useState<StrapiImageData[] | undefined>(undefined);
 useEffect(()=>{
  getHomePageSliderImages().then((res)=>{
    console.log('slider api res',res.data.data[0].attributes.images)
   setSliderImages(res.data.data[0].attributes.images.data)
 }).catch((err)=>{
   console.log('error',err)
 })
 },[])
 console.log('sliders image state',sliderImages)

  return (
    <div className="overflow-hidden">
      <div className="container pb-9 pb-md-14">
        <div className="row">
          <div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto text-center">
            <h3 className="display-4 mb-8">Our Recent Projects</h3>
          </div>
        </div>

        <div className="swiper-container grid-view nav-bottom nav-color mb-14">
         {sliderImages !==undefined &&   <Carousel
            grabCursor
            slidesPerView={2}
            pagination={false}
            className="overflow-visible"
            breakpoints={{ 768: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
          >
            {sliderImages.map(({ id, attributes }) => (
              <figure className="rounded" key={id}>
                <img width={1100} height={770} src={`${process.env.NEXT_PUBLIC_API_IMAGE}${attributes.url}`} alt="" style={{ width: '100%', height: 'auto' }} />
                <NextLink title={<i className="uil uil-link" />} className="item-link" href={'/projects'} />
              </figure>
            ))}
          </Carousel>}
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
