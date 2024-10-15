import { FunctionComponent } from "react";
import { Configuration } from "../../Configuration";
import { useIntl } from "react-intl";



export interface PublishEntities {
    pillar : string;
    busu: string;
    region:string;
    country:string;
    codeelr:string;
    localentities:string;
}

const {fetchCiuntries, fetchPNPPoleEntities} = Configuration.policyFetcher;
// const EntitiesList: FunctionComponent = () => {
//     const { add } = useToast();
//     const intl =useIntl();
    
// }
