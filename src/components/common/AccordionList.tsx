import { FC } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
const accordions = [
  {
    no: 'One',
    expand: true,
    heading: 'Fresh Perspective',
    body: "Being new means we aren't tied down by 'how things have always been done.' We approach challenges with fresh eyes, ensuring innovative and out-of-the-box solutions for our clients"
  },
  {
    no: 'Two',
    expand: false,
    heading: 'Passionate Drive',
    body: " Our team is fueled by enthusiasm and a genuine love for what we do. Every project we undertake is driven by passion, ensuring utmost dedication and effort."
  },
  {
    no: 'Three',
    expand: false,
    heading: 'Adaptive & Agile',
    body: "As a nimble start-up, we have the flexibility to adapt to your specific needs rapidly. We're not bogged down by bureaucracy, which means quicker turnarounds and a bespoke approach tailored to your requirements."
  },
  {
    no: 'Four',
    expand: false,
    heading: 'Cutting-edge Skills',
    body: "Our team, though young, is well-versed in the latest technologies and methodologies. We’re continuously learning, ensuring that you benefit from the very latest in tech advancements."
  },
  {
    no: 'Five',
    expand: false,
    heading: 'Direct Communication',
    body: "When you work with VisionVertex, you get direct access to our core team. No middlemen, no runarounds, just straightforward, transparent communication."
  },
  {
    no: 'Six',
    expand: false,
    heading: 'Cost-Effective Solutions',
    body: " Without the overheads of larger companies, we're able to offer competitive rates. You get top-notch services without the hefty price tag."
  }
];

const AccordionList: FC = () => {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
};

export default AccordionList;
