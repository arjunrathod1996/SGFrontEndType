import { PolicyDocumentType } from "../utils/Enums";

export interface FileDesc extends File {
    id:number;
    reader: FileReader;
}

export interface Attachment {
    id?:number;
    name:string;
    size:number;
    language?:number;
    natureId?:number;
    master?:boolean;
    policyDocmentType?: PolicyDocumentType;
    link:string;
    documentId:number;
    format:string;
    version:string;
    revision?:boolean;
    file: FileDesc | string | Blob;
    createdBy?: string;
    reolEnum?:string;
    active?:boolean;
}