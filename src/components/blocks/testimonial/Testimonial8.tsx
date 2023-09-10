import { FC, useEffect, useState } from 'react';
import { TestimonialCard3 } from 'components/reuseable/testimonial-cards';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
// -------- data -------- //
import { testimonialList } from 'data/demo-7';
import { ClientFeedbackTypes } from '../../../../pages/projects/project.types';
import { getClientFeedbacks } from '../../../../service/api/api';

const Testimonial8 = () => {
  const [clientFeedback,setClientFeedback] =useState<ClientFeedbackTypes[]|undefined>(undefined)
  // used for masonry layout
  useIsotope();
  useEffect(()=>{
    if(clientFeedback==undefined){
      getClientFeedbacks().then((res)=>{
        console.log('client feedback api res',res.data.data)
        setClientFeedback(res.data.data)
      }).catch((err)=>{
        console.log('error',err)
      })
    }
  },[clientFeedback])
console.log('cliend feedback state',clientFeedback)
  return (
    <div className='mb-20'>
      <h2 className="display-4 text-center mb-8">Happy Customers</h2>

      <div className="grid">
        <div className="row isotope gy-6">
          { clientFeedback && clientFeedback.map(({id,attributes}) => (
            <div className="item col-md-6 col-xl-4" key={id}>
              <TestimonialCard3 
              designation=''
              image={`${process.env.NEXT_PUBLIC_API_IMAGE}${attributes.clientPicture.data.attributes.url}`}
              name={attributes.name}
              review={attributes.feedback}
              shadow />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial8;
