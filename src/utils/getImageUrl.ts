
export const getImageUrl=(imagePath:string)=>{
    return `${process.env.NEXT_PUBLIC_API_IMAGE}${imagePath}`;

}