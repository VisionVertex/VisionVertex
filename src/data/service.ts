import Edit from 'icons/solid-mono/Edit';
import Lamp from 'icons/solid-mono/Lamp';
import Team from 'icons/lineal/Team';
import Check from 'icons/lineal/Check';
import Medal from 'icons/lineal/Medal';
import Earth from 'icons/lineal/Earth';
import Shield from 'icons/lineal/Shield';
import Target from 'icons/lineal/Target';
import Search from 'icons/lineal/Search';
import ChatTwo from 'icons/lineal/ChatTwo';
import Script from 'icons/solid-duo/Script';
import Verify from 'icons/solid-mono/Verify';
import Server from 'icons/solid-duo/Server';
import Setting from 'icons/solid-duo/Setting';
import TeamTwo from 'icons/solid-mono/TeamTwo';
import ShopTwo from 'icons/lineal/ShopTwo';
import Browser from 'icons/lineal/Browser';
import Director from 'icons/solid-duo/Director';
import Settings from 'icons/lineal/Settings';
import Telephone from 'icons/lineal/Telephone';
import SearchTwo from 'icons/lineal/SearchTwo';
import Analytics from 'icons/lineal/Analytics';
import Megaphone from 'icons/lineal/Megaphone';
import ClockThree from 'icons/lineal/ClockThree';
import DeliveryBox from 'icons/solid-mono/DeliveryBox';
import CloudNetwork from 'icons/solid-duo/CloudNetwork';
import SmartphoneTwo from 'icons/lineal/SmartphoneTwo';
import SettingsThree from 'icons/lineal/SettingsThree';
import CloudComputing from 'icons/lineal/CloudComputing';
import { LinkType } from 'types/demo-1';
import color from 'utils/color';
import Code from 'icons/solid-mono/Code';
import SeoTwo from 'icons/solid/SeoTwo';
import Bulb from 'icons/solid-mono/Bulb';
import LightBulb from 'icons/lineal/LightBulb';
import Rocket from 'icons/solid/Rocket';
import RocketTwo from 'icons/lineal/RocketTwo';
import Puzzle from 'icons/solid-mono/Puzzle';
import Shipment from 'icons/solid-mono/Shipment';
import TargetTwo from 'icons/solid-duo/TargetTwo';
import CloudGroup from 'icons/solid-duo/CloudGroup';
import PenTool from 'icons/solid-duo/PenTool';
import BarChartTwo from 'icons/solid-duo/BarChartTwo';


//custom services 
export const ourServies=[
  {
    id:1,
    title:'Web Development',
    url:'/services/web-development'
  },
  {
    id:2,
    title:'Mobile App Development',
    url:'/services/mobile-app-development'
  },
  {
    id:3,
    title:'Python Development',
    url:'/services/python-development'
  },
  {
    id:4,
    title:'SEO & Digital Marketing',
    url:'/services/digital-Marketing-and-seo'
  }
]


// used in the services-1 block
export const serviceList1 = [
  {
    id: 1,
    link: '#',
    icon: Script,
    title: 'Web Development',
    linkText: 'Learn More',
    linkType: LinkType.yellow,
    description: `Craft robust web applications using Django and Flask frameworks, ensuring scalability and performance.`
  },
  {
    id: 2,
    link: '#',
    icon: Browser,
    title: 'Data Science & Analytics',
    linkText: 'Learn More',
    linkType: LinkType.red,
    description: `Analyze data effectively with Pandas, NumPy, and Matplotlib, extracting actionable insights.`
  },
  {
    id: 3,
    link: '#',
    icon: ChatTwo,
    linkType: LinkType.green,
    title: 'AI & Machine Learning',
    linkText: 'Learn More',
    description: `Harness AI potential with TensorFlow, PyTorch, and scikit-learn, optimizing operations.`
  },
  {
    id: 4,
    link: '#',
    icon: Megaphone,
    linkType: LinkType.blue,
    title: 'Automation & Scripting',
    linkText: 'Learn More',
    description: `Automate tasks seamlessly with custom Python scripts, enhancing workflow efficiency.`
  }
];

// used in the services-3, services-8, services-13 block
export const serviceList2 = [
  {
    id: 1,
    linkUrl: '#',
    title: 'Developing User freindly website',
    icon: 'uil-laptop-cloud',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.`
  }
];

// used in the services-4 block
export const serviceList3 = [
  {
    id: 1,
    linkUrl: '#',
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 4,
    linkUrl: '#',
    title: 'Market Research',
    icon: 'uil-chart-line',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-5 block
export const serviceList4 = [
  {
    id: 1,
    Icon: Director,
    title: 'Discovery & Planning',
    description: `This phase involves engaging closely with clients to grasp their vision, evaluating the project's feasibility, and carving out a comprehensive strategy. Through understanding both business and user needs, we determine a project's scope, timeline, and required resources.`
  },
  {
    id: 2,
    Icon: Bulb,
    title: 'Design & Prototyping',
    description: `Emphasizing a user-first approach, our team crafts intuitive designs tailored to enhance user engagement. By developing interactive prototypes, clients can visualize and feel the final product, facilitating iterative feedback before the actual build process begins.`
  },
  {
    id: 3,
    Icon:Script ,
    title: 'Development',
    description: `Leveraging the latest in technological frameworks and best practices, our adept developers translate designs into functional web solutions. This phase ensures efficient, clean, and modular code, leading to robust web services optimized for performance.`
  },
  {
    id: 4,
    Icon: PenTool,
    title: 'Testing & QA',
    description: `Before any product sees the light of day, it undergoes rigorous testing. This includes functional checks, performance evaluations, and security audits. Our meticulous quality assurance process ensures that the web service functions flawlessly across different devices and browsers, guaranteeing a consistent user experience.`
  },
  {
    id: 5,
    Icon: CloudNetwork,
    title: 'Deployment',
    description: `Beyond just launching the web service, this phase involves a well-orchestrated plan ensuring smooth transitions. Utilizing best practices, we focus on scalability to handle future growth, resilience against potential outages, and ensuring optimal performance during peak user interactions.`
  },
  {
    id: 6,
    Icon: Setting,
    title: 'Maintenance & Updates',
    description: ` The digital world is ever-evolving, and so are our services. We provide ongoing technical support, adapting to user feedback, and integrating emerging technologies. This continuous refinement guarantees that our web services not only meet but often exceed modern standards and user expectations.`
  }
];

// used in the services-6 block
export const serviceList5 = [
  ['Aenean quam ornare curabitur blandit consectetur.', 'Nullam quis risus eget urna mollis ornare aenean leo.'],
  ['Etiam porta euismod malesuada mollis nisl ornare.', 'Vivamus sagittis lacus augue rutrum maecenas odio.']
];

// used in the services-7 block
export const serviceList6 = [
  {
    id: 1,
    Icon: Target,
    color: color.aqua,
    title: 'Fitness Goal',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 2,
    Icon: Medal,
    color: color.yellow,
    title: 'Activity Tracking',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 3,
    Icon: ClockThree,
    color: color.red,
    title: 'Sleep Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 4,
    Icon: Check,
    color: color.pink,
    title: 'Workout Report',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 5,
    Icon: ShopTwo,
    color: color.green,
    title: 'Nutritional Analysis',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  },
  {
    id: 6,
    Icon: Team,
    color: color.purple,
    title: 'Activity Sharing',
    description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  }
];

// used in the services-9 block
export const serviceList7 = [
  {
    id: 1,
    Icon: Telephone,
    color: color.yellow,
    title: 'Developing user freindly Webisite',
    cardColor: 'bg-pale-yellow',
    columnClass: 'col-md-5 offset-md-1 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 2,
    Icon: Shield,
    color: color.red,
    title: 'Secure Payments',
    cardColor: 'bg-pale-red',
    columnClass: 'col-md-6 align-self-end',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.'
  },
  {
    id: 3,
    color: color.leaf,
    Icon: CloudComputing,
    title: 'Daily Updates',
    cardColor: 'bg-pale-leaf',
    columnClass: 'col-md-5',
    description: 'Nulla vitae elit libero, a pharetra augue.'
  },
  {
    id: 4,
    Icon: Analytics,
    color: color.primary,
    title: 'Market Research',
    cardColor: 'bg-pale-primary',
    columnClass: 'col-md-6 align-self-start',
    description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.'
  }
];

// used in the services-18 block
export const serviceList8 = [
  {
    id: 1,
    Icon: Browser,
    title: 'Web Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 2,
    Icon: SmartphoneTwo,
    title: 'Mobile Design',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 3,
    Icon: SettingsThree,
    title: 'Development',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  },
  {
    id: 4,
    title: 'SEO',
    Icon: SearchTwo,
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
  }
];

// used in the services-19 block
export const serviceList9 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: '24/7 Support',
    icon: 'uil-phone-volume',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Secure Payments',
    icon: 'uil-shield-exclamation',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.orange,
    title: 'Daily Updates',
    icon: 'uil-laptop-cloud',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo.`
  }
];

// used in the services-20 block
export const serviceList10 = [
  {
    id: 1,
    linkUrl: '#',
    Icon: Script,
    title: 'Web Development',
    description: `From the first line of code to the final user test, our web development process ensures a seamless, responsive, and unforgettable user experience.`
  },
  {
    id: 2,
    linkUrl: '#',
    Icon:Script,
    title: 'Mobile App Development',
    description: `Transform your idea into a powerful mobile application. We harness the latest technologies to deliver apps that are intuitive, efficient, and aesthetically pleasing`
  },
  {
    id: 3,
    linkUrl: '#',
    Icon: Script,
    title: 'Python Development',
    description: `Elevate your business with VisionVertex's Python expertise. From crafting desktop apps to automated testing and web solutions, our Python prowess delivers innovation and efficiency`
  },
  {
    id: 4,
    linkUrl: '#',
    Icon: SeoTwo,
    title: 'SEO & Digital Marketing',
    description: `Increase your brand's digital footprint. Our marketing strategies are data-driven, ensuring your brand reaches its target audience effectively and climbs the search engine ranks.`
  },
  // {
  //   id: 5,
  //   linkUrl: '#',
  //   Icon: Setting,
  //   title: 'IT Solutions',
  //   description: `We also help to build customized desktop application with the power of python.`
  // },
  // {
  //   id: 6,
  //   linkUrl: '#',
  //   Icon: Server,
  //   title: 'Server Configuration',
  //   description: `Duis mollis gravida commodo id luctus erat porttitor ligula, eget lacinia odio sem aget elit nullam quis risus eget.`
  // }
];

// used in the services-21 block
export const serviceList11 = [
  {
    id: 1,
    link: '#',
    Icon: Edit,
    title: 'Content Marketing',
    linkType: LinkType.fuchsia,
    iconClassName: 'icon-svg-sm solid-mono text-fuchsia mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 2,
    link: '#',
    Icon: TeamTwo,
    title: 'Social Engagement',
    linkType: LinkType.violet,
    iconClassName: 'icon-svg-sm solid-mono text-violet mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 3,
    link: '#',
    Icon: Lamp,
    linkType: LinkType.orange,
    title: 'Identity & Branding',
    iconClassName: 'icon-svg-sm solid-mono text-orange mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  },
  {
    id: 4,
    link: '#',
    Icon: DeliveryBox,
    title: 'Product Design',
    linkType: LinkType.green,
    iconClassName: 'icon-svg-sm solid-mono text-green mb-3',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.`
  }
];

// used in the services-24 block
export const serviceList12 = [
  {
    id: 1,
    title: 'Web Design',
    image: { '1x': '/img/illustrations/i24.png', '2x': '/img/illustrations/i24@2x.png 2x' },
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus
    tellus.`
  },
  {
    id: 2,
    title: 'Graphic Design',
    image: { '1x': '/img/illustrations/i19.png', '2x': '/img/illustrations/i19@2x.png 2x' },
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    title: '3D Animation',
    image: { '1x': '/img/illustrations/i18.png', '2x': '/img/illustrations/i18@2x.png 2x' },
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-25 block
export const serviceList13 = [
  {
    id: 1,
    linkUrl: '#',
    color: color.purple,
    title: 'Web Design',
    icon: 'uil-monitor',
    description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.`
  },
  {
    id: 2,
    linkUrl: '#',
    color: color.green,
    title: 'Graphic Design',
    icon: 'uil-swatchbook',
    description: `Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.`
  },
  {
    id: 3,
    linkUrl: '#',
    color: color.pink,
    title: '3D Animation',
    icon: 'uil-presentation-play',
    description: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.`
  }
];

// used in the services-26 block
export const serviceList14 = [
  {
    id: 1,
    url: '#',
    title: 'Wedding',
    image: { '1x': '/img/photos/fs1.jpg', '2x': '/img/photos/fs1@2x.jpg 2x' }
  },
  {
    id: 2,
    url: '#',
    title: 'Couples',
    image: { '1x': '/img/photos/fs2.jpg', '2x': '/img/photos/fs2@2x.jpg 2x' }
  },
  {
    id: 3,
    url: '#',
    title: 'Engagement',
    image: { '1x': '/img/photos/fs3.jpg', '2x': '/img/photos/fs3@2x.jpg 2x' }
  }
];
