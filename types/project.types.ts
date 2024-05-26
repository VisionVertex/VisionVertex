//Strapi image types 
export type ImageFormat ={
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
  }
  
  export type StrapiImageAttributes= {
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
      small: ImageFormat;
      thumbnail: ImageFormat;
      // Add other formats here as needed
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | any;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export  type StrapiImageData= {
    id: number;
    attributes: StrapiImageAttributes;
  }
  export  type StrapiArrayImageData=StrapiImageData[]
  export type StrapiImageResponse= {
    data: StrapiImageData;
  }
  export type ClientFeedbackTypes={
    id:number;
    attributes:{
        name:string;
        designation:string|null;
        feedback:string;
        rating:string;
        createdAt:string;
        updatedAt:string;
        publishedAt:string;
        clientPicture:StrapiImageResponse

    }

  }
  //!Strapi Project Language Data type
export type StrapiLanguageTechType = {
  id: number;
  attributes: {
    technologyName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    technologyLogo: StrapiImageResponse;
  };
};
  export type ProjectAttributes={
      id:number;
      attributes:{
        title:string;
     slug:string;
     subTitle:string;
     category:any;
     projectTime:string;
     photos:{data:StrapiArrayImageData}
     clientName:string;
     projectBanner:StrapiImageResponse;
     projectOverview:string
     technologies:{data:StrapiLanguageTechType[]}
      }
  }
  
  export type PaginationType={
    page:number;
    pageSize:number;
    pageCount:number;
    total:number;
}