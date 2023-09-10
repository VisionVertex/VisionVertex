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
  export type StrapiResponse= {
    data: StrapiImageData;
  }
  