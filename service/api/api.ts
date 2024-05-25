import axios from "axios";
const BaseUrl=process.env.NEXT_PUBLIC_API_URL;
 const getHomePageSliderImages=()=>{
    return axios.get(`${BaseUrl}/home-page-sliders?populate=*`)
}
 const getClientFeedbacks=()=>{
    return axios.get(`${BaseUrl}/client-feedbacks?populate=*`)
}
export {getHomePageSliderImages,getClientFeedbacks}