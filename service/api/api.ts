import axios from "axios";
export const getHomePageSliderImages=()=>{
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home-page-sliders?populate=*`)
}
export const getClientFeedbacks=()=>{
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/client-feedbacks?populate=*`)
}