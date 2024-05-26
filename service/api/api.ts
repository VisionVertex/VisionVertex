import axios from 'axios';
const BaseUrl = process.env.NEXT_PUBLIC_API_URL;
const getHomePageSliderImages = () => {
  return axios.get(`${BaseUrl}/home-page-sliders?populate=*`);
};
const getClientFeedbacks = () => {
  return axios.get(`${BaseUrl}/client-feedbacks?populate=*`);
};
const getProjects = async (pageNumber = 1, pageLimit = 10) => {
  const response = await axios.get(
    `${BaseUrl}/projects?pagination[page]=${pageNumber}&pagination[pageSize]=${pageLimit}&populate=deep`
  );
  return response.data;
};
const getProjectDetails= async (slug:string)=>{
     const response = await axios.get( `${BaseUrl}/projects?filters[slug]=${slug}&populate=deep` );
     return response.data;

}
const sendContactEmail= async (token:string,userData:any)=>{
    const response = await axios.post(`${BaseUrl}/contacts`,{data:userData} ,{
        headers:{
            'x-recaptcha-token':token
        }
    })
    return response.data;
}
export { getHomePageSliderImages, getClientFeedbacks, getProjects ,getProjectDetails,sendContactEmail};
