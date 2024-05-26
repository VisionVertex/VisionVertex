import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
// -------- custom component -------- //
import { Footer8 } from 'components/blocks/footer';
import { Navbar } from 'components/blocks/navbar';
import { Portfolio1 } from 'components/blocks/portfolio';
import PageProgress from 'components/common/PageProgress';
import NextLink from 'components/reuseable/links/NextLink';
import ProjectDetailsContent from 'components/common/ProjectDetailsContent';
import ProjectDetailsNavigation from 'components/common/ProjectDetailsNavigation';
import { useRouter } from 'next/router';
import { ProjectAttributes } from '../../types/project.types';
import { getProjectDetails } from '../../service/api/api';
import NotFound from '../404';
import useLoader from 'hooks/useLoader';
import Loader from 'components/reuseable/Loader';


const ProjectDetails: NextPage = () => {
  const [projectDetails,setProjectDetails]=useState<ProjectAttributes|undefined>(undefined);
  const {loading,showLoader,hideLoader}=useLoader();
  const {query}= useRouter();
   const slug = query.slug;
   useEffect(()=>{
     if(slug!==undefined && slug.length>0){
      showLoader();
    getProjectDetails(slug[0]).then((res)=>{
      // console.log('project details response',res);
      if(res?.data.length>0){
        setProjectDetails(res?.data[0]);
      }
      hideLoader();

    }).catch((err)=>{
     hideLoader();
    })
     }
   },[slug])
    if(loading ){
      return <Loader/>
    }
   if(!loading && projectDetails ===undefined){
     return <NotFound pageTitle='Projects' pageUrl='/projects'/>
   }
  return (
    <Fragment>
      <PageProgress />

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          social
          stickyBox={false}
          logoAlt="logo-light"
          navClassName="navbar navbar-expand-lg center-nav transparent position-absolute navbar-dark"
         // button={<NextLink title="Contact" href="#" className="btn btn-sm btn-white rounded-pill" />}
        />
      </header>
      {projectDetails &&  <main className="content-wrapper">
        {/* ========== heading section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay text-white"
          style={{ backgroundImage: 'url(/img/photos/bg6.jpg)' }}
        >
          <div className="container pt-17 pb-12 pt-md-19 pb-md-16 text-center">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="post-header">
                  {/* <div className="post-category text-line text-white">
                    <NextLink title="Identity" href="#" className="text-reset" />
                  </div> */}

                  <h1 className="display-6 mb-3 text-white">{projectDetails.attributes.title}</h1>
                  <p className="lead px-md-12 px-lg-12 px-xl-15 px-xxl-18">
                    {projectDetails.attributes.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper bg-light wrapper-border">
          {/* ========== details section ========== */}
          <div className="container pt-14 pt-md-16 pb-13 pb-md-15">
            <ProjectDetailsContent
            
            title={projectDetails.attributes.title}
             description={projectDetails.attributes.projectOverview}
             technologies={projectDetails.attributes.technologies.data}
            />
          </div>

          {/* ========== portfolio section ========== */}
          <Portfolio1 sliders={projectDetails.attributes.photos.data} />
        </section>

        {/* ========== navigation section ========== */}
        {/* <ProjectDetailsNavigation /> */}
      </main>}

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
};

export default ProjectDetails;
