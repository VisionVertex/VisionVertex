import { GetServerSidePropsContext, NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import { Navbar } from 'components/blocks/navbar';
import { Footer20, Footer8 } from 'components/blocks/footer';
import { ProjectCard2 } from 'components/reuseable/project-cards';
import PageProgress from 'components/common/PageProgress';
import useLoader from 'hooks/useLoader';
import { truncateText } from 'utils/truncatedText';
import { PaginationType, ProjectAttributes } from '../../types/project.types';
import Loader from 'components/reuseable/Loader';
import LoadMore from 'components/reuseable/LoadMore';
import { getProjects } from '../../service/api/api';
import Head from 'next/head';
import { getImageUrl } from 'utils/getImageUrl';

const ProjectsPage = () => {
  //project list state
  const [projectList, setProjectList] = useState<ProjectAttributes[] | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<PaginationType>();
  const { showLoader, hideLoader, loading } = useLoader();
  //!=========fetching projects
  useEffect(() => {
    if (projectList === undefined || currentPage !== totalPages?.page) {
      showLoader();
      getProjects(currentPage)
        .then((projectRes) => {
          // console.log('project api response',projectRes)
          if(currentPage===1){
            setProjectList(projectRes.data);
          }
          else{
             const previousPageData= projectList as ProjectAttributes[]
            setProjectList([...previousPageData,...projectRes.data]);
          }
          setTotalPages(projectRes?.meta?.pagination);
          hideLoader();
          // console.log('****project list', projectRes.data);
        })
        .catch((err) => {
          hideLoader();
          // console.log('error',err)
        });
    }
  }, [projectList, currentPage]);

  const imageClassNameRight = 'col-lg-9 col-xl-7 offset-xl-2 rounded';
  const imageClassNameLeft = 'col-lg-9 offset-lg-3 col-xl-7 offset-xl-4 rounded';
  const leftDetailStyle = { left: '12%', bottom: '20%' };
  const rightDetailStyle = { right: '3%', bottom: '20%' };
  const cardStyleLeft = { transform: 'translate(0rem, 1.4375rem, 0rem)' };
  const cardStyleRight = { transform: 'translate(0rem, 2rem, 0rem)' };
  
  return (
    <Fragment>
      <PageProgress />
      <Head>
        <title>Our Latest Projects</title>
      </Head>

      {/* ========== header section ========== */}
      <header className="wrapper bg-light">
        <Navbar social />
      </header>
      {loading && <Loader />}

      <main className="content-wrapper">
        {/* ========== title section ========== */}
        <section className="wrapper bg-light">
          <div className="container pt-10 pt-md-14 text-center">
            <div className="row">
              <div className="col-md-8 col-lg-7 col-xl-6 col-xxl-5 mx-auto">
                <h1 className="display-1 mb-3">Latest Projects</h1>
                <p className="lead fs-lg px-lg-10 px-xxl-8">
                  Check out some of our awesome projects with creative ideas and great design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light mb-10">
          <div className="container pt-9 pt-md-11 pb-14 pb-md-16">
            {/* ========== projects section ========== */}
            <div className="projects-overflow mt-md-10 mb-10 mb-lg-15">
              {projectList &&
                projectList.map(({ id, attributes }, index) => {
                  return (
                    <ProjectCard2
                      title={attributes.title}
                      category={''}
                      description={attributes.subTitle}
                      image_url={getImageUrl(`${attributes.projectBanner?.data.attributes.url}?format=webp&resize=1200x923`) || ''}
                      link={`/projects/${attributes.slug}`}
                      imageClassName={index % 2 == 0 ? imageClassNameRight : imageClassNameLeft}
                      cardStyle={index % 2 == 0 ? cardStyleRight : cardStyleLeft}
                      detailsStyle={index % 2 == 0 ? rightDetailStyle : leftDetailStyle}
                      width={1200}
                      height={923}
                      key={id}
                    />
                  );
                })}
                {projectList && !loading && projectList.length===0 && <div className='mx-auto text-center'>
                  <h6 className='display-4 mb-3'>Oops! Something went wrong</h6>
                  <p className='fw-bold'>Unable to fetch records. Server issue likely. Try again soon</p>
                  </div>}
            </div>

            {/* ========== pagination section ========== */}
            <div className="mb-10">
              <LoadMore
                currentPage={currentPage}
                totalPages={totalPages?.pageCount || 1}
                onLoadMore={() => {
                  setCurrentPage((prev) => prev + 1);
                }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectsPage;
// export async function getServerSideProps({ resolvedUrl }: GetServerSidePropsContext) {
//   try {
//     const seoRes = await getSeoPageContents(resolvedUrl);
//     if (seoRes.data.length > 0) {
//       return {
//         props: {
//           seoData: seoRes.data
//         }
//       };
//     }
//     return {
//       props: {
//         seoData: null
//       }
//     };
//   } catch (error) {
//     return {
//       props: {
//         seoData: null
//       }
//     };
//   }
// }
