import { Configuration } from "../Configuration";
import { Attachment } from "../store/document.model";

const handleDownloadDocument = (
    policyId: number,
    file: Attachment,
    isOriginalFormat: boolean,
    versionInName?:boolean,
) => {
    const fileFormat = file.format !== '' && isOriginalFormat ? file.format : 'pdf';
    Configuration.documentFetcher.downloadDocument(policyId, file.documentId, fileFormat).then(prviewDocument => {
        if(prviewDocument[0] && (prviewDocument[0] as Blob).size > 0) {
            const link = document.createElement('a');
            const blob = isOriginalFormat
                ? new Blob(prviewDocument)
                : new Blob(prviewDocument, {type: 'application/pdf'});
            link.href = window.URL.createObjectURL(blob);
            const fileName = versionInName
                ? `${file.name?.substring(0, file.name?.lastIndexOf('.'))}_${file.version}.${fileFormat}`
                : `${file.name?.substring(0, file.name?.lastIndexOf('.'))}.${fileFormat}`;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
        }
    });
};

export {handleDownloadDocument};

