import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer8 } from 'components/blocks/footer';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
// -------- custom hook -------- //
import useIsotope from 'hooks/useIsotope';
import ContactForm from 'components/common/ContactForm';
// -------- data -------- //
const projectList = [
  {
    id: 1,
    link: '#',
    color: 'purple',
    type: 'product',
    category: 'Rental',
    title: 'Room Boking ',
    image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
  },
  {
    id: 2,
    link: '#',
    color: 'leaf',
    type: 'product',
    category: 'Rental',
    title: 'Room Boking ',
    image: { width: 1300, height: 1262, url: '/img/photos/cs16.jpg' }
  },
  // {
  //   id: 2,
  //   link: '/project/2',
  //   color: 'leaf',
  //   type: 'workshop',
  //   category: 'COFFEE',
  //   title: 'Mollis Ipsum Mattis',
  //   image: { width: 1300, height: 1435, url: '/img/photos/cs17.jpg' }
  // },
  // {
  //   id: 3,
  //   link: '/project/3',
  //   color: 'violet',
  //   type: 'still-life',
  //   category: 'STILL LIFE',
  //   title: 'Ipsum Ultricies Cursus',
  //   image: { width: 1200, height: 923, url: '/img/photos/cs18.jpg' }
  // },
  // {
  //   id: 4,
  //   link: '/projects/4',
  //   color: 'yellow',
  //   type: 'product',
  //   category: 'PRODUCT',
  //   title: 'Sollicitudin Ornare Porta',
  //   image: { width: 1200, height: 919, url: '/img/photos/cs19.jpg' }
  // },

  // {
  //   id: 6,
  //   link: '#',
  //   color: 'green',
  //   type: 'workshop',
  //   category: 'WORKSHOP',
  //   title: 'Ipsum Mollis Vulputate',
  //   image: { width: 1200, height: 960, url: '/img/photos/cs21.jpg' }
  // },
  // {
  //   id: 5,
  //   link: '#',
  //   color: 'orange',
  //   type: 'product',
  //   category: 'PRODUCT',
  //   title: 'Inceptos Euismod Egestas',
  //   image: { width: 1300, height: 1365, url: '/img/photos/cs20.jpg' }
  // },
  // {
  //   id: 8,
  //   link: '#',
  //   color: 'red',
  //   type: 'concept',
  //   category: 'CONCEPT',
  //   title: 'Porta Ornare Cras',
  //   image: { width: 1200, height: 1200, url: '/img/photos/cs22.jpg' }
  // },
  // {
  //   id: 10,
  //   link: '#',
  //   color: 'purple',
  //   type: 'product',
  //   category: 'PRODUCT',
  //   title: 'Magna Tristique Inceptos',
  //   image: { width: 1200, height: 830, url: '/img/photos/cs24.jpg' }
  // },
  // {
  //   id: 7,
  //   link: '#',
  //   color: 'aqua',
  //   type: 'concept',
  //   category: 'CONCEPT',
  //   title: 'Vulputate Sollicitudin',
  //   image: { width: 1200, height: 1294, url: '/img/photos/cs23.jpg' }
  // }
];

const filterItems = [
  { id: 1, title: 'All', value: '*' },
  { id: 2, title: 'Concept', value: '.concept' },
  { id: 3, title: 'Product', value: '.product' },
  { id: 4, title: 'Workshop', value: '.workshop' },
  { id: 5, title: 'Still Life', value: '.still-life' }
];

const ProjectsFour: NextPage = () => {
  const { handleFilterKeyChange, filterKey } = useIsotope();

  return (
    <Fragment>
    {/* ========== header section ========== */}
    <header className="wrapper bg-soft-primary">
      <Navbar
        fancy
        social
        logoAlt="logo-purple"
        navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light caret-none"
      />
    </header>
    <main className="content-wrapper">
      {/* ========== page title section ========== */}
      <section className="wrapper bg-soft-primary">
        <div className="container pt-10 pb-0 pt-md-14 pb-md-13 text-center">
          <div className="row">
            <div className="col-xl-10 mx-auto mb-6">
              <h1 className="display-1 mb-3">Projects</h1>
              <p className="lead mb-0">Explore the showcase of our remarkable projects, each a testament to our team's ingenuity and commitment to excellence. From innovative concepts to captivating designs, our portfolio reflects the creative spirit that drives us. We take pride in delivering solutions that not only meet but exceed expectations, offering a seamless blend of creativity and functionality. Dive into our collection of awesome projects and discover the unique ideas and outstanding designs that set us apart in the ever-evolving landscape of technology and innovation.</p>
            </div>
          </div>
        </div>
      </section>

        <section className="wrapper bg-light">
          <div className="container py-14 py-md-16">
            <div className="grid grid-view projects-masonry">
              {/* ========== filter section ========== */}
              <div className="isotope-filter filter mb-10">
                <p>Filter:</p>
                <ul>
                  {filterItems.map(({ id, title, value }) => (
                    <li key={id}>
                      <a
                        onClick={handleFilterKeyChange(value)}
                        className={`filter-item ${value === filterKey ? 'active' : ''}`}
                      >
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ========== projects section ========== */}
              <div className="row gx-md-8 gy-10 gy-md-13 isotope">
                {projectList.map(({ id, image, title, category, color, link, type }) => (
                  <div key={id} className={`project item col-md-6 col-xl-4 ${type}`}>
                    <Link href={link} passHref legacyBehavior>
                      <a>
                        <figure className="lift rounded mb-6">
                          <Image
                            alt={title}
                            src={image.url}
                            width={image.width}
                            height={image.height}
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </figure>
                      </a>
                    </Link>

                    <div className="project-details d-flex justify-content-center flex-column">
                      <div className="post-header">
                        <div className={`post-category text-line mb-3 text-${color}`}>{category}</div>
                        <h2 className="post-title h3">{title}</h2>
                      </div>
                    </div>
                  </div>
                ))}
                
              </div>
            </div>
          </div>
        </section>
      </main>
  {/* ========== contact form section ========== */}
  <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Get in Touch</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectsFour;
