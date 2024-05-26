import { FC } from 'react';
import Image from 'next/image';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { portfolioList1 } from 'data/portfolio';
import { StrapiArrayImageData } from '../../../../types/project.types';
import { getImageUrl } from 'utils/getImageUrl';
type Portfolio1Props={
   sliders?:StrapiArrayImageData
}
const Portfolio1: FC<Portfolio1Props> = ({sliders}) => {
  const carouselBreakpoints = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 }
  };

  return (
    <div className="container-fluid px-md-6">
      <div className="swiper-container blog grid-view mb-17 mb-md-19">
        {sliders && sliders.length>0  && (
          <Carousel autoplay grabCursor breakpoints={carouselBreakpoints}>
          {sliders.map(({id,attributes}) => (
            <figure className="rounded" key={id}>
              <Image width={900} height={650} src={getImageUrl(`${attributes.url}?format=webp&resize=900x650`)} alt="slider image" style={{ width: '100%', height: 'auto' }} />
            </figure>
          ))}
        </Carousel>
        )}
      </div>
    </div>
  );
};

export default Portfolio1;
