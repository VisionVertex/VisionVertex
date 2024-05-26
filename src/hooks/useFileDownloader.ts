import { useCallback } from 'react';

function useFileDownloader(): (fileUrl: string, suggestedName: string) => void {
    const downloadFile = useCallback(async (fileUrl: string, suggestedName: string) => {
        fetch(fileUrl).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download =suggestedName ;
                alink.click();
            })
        }).catch((err)=>{
            console.log('error',err)
        })
    }, []);

    return downloadFile;
}

export default useFileDownloader;
