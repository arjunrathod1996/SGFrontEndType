
export interface IReferentialDataFetcher {
    fetchPeopleListByContactId(contact:string): Promise<any>;
}