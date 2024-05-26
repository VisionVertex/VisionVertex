type Props = {
    text: string;
    maxLength?: number;
  }
  
 export  const truncateText = ({text,maxLength=50}:Props): string => {
    if (text?.length <= maxLength) {
      return text;
    }
    return `${text?.slice(0, maxLength)}...`;
  };