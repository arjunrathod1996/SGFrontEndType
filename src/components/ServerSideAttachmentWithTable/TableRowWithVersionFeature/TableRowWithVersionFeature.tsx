import { FC } from "react";
import { Configuration } from "../../../Configuration";
import { useIntl } from "react-intl";
import { Tooltip } from "reactstrap";


interface TableRowWithVersionFeatureProps {
    natureList: policyNature[];
    languageList: PnpPolicyLanguage[];
    docHubId:string;
    natureCategory:string;
    isDownloadable?: boolean;
    handleDelete:(docHubId: string) => void;
    versionApiParameters:{
        riskId: number;
        sgCodeReference:number;
        entities:string[];
        policyId:number;
        documenType?:number;
    };
    isLocal:boolean;
}


const fetchVersionFiles = async(
    versionApiParameters: {
        riskId: number;
        sgCodeReference:number;
        entities:string[];
        policyId:number;
        documenType?:number;
    },
    nature: PolicyNature,
    language:PnpPolicyLanguage,
    isLocal:boolean,
)=>{
    if(isLocal){
        return fetchLocalDocumentVersionFiles({...versionApiParameters, natureId : nature.id, languageId: language.id});
    }
    return fetchGroupDocumentVersionFiles({
        riskId: [versionApiParameters.riskId]
        sgCodeReference:versionApiParameters.sgCodeReference;
        languageId: language.id
        policyId:versionApiParameters.policyId
        documenType: versionApiParameters.documenType ? [versionApiParameters.documenType] : [],
    });
};

const { fetchLocalDocumentVersionFiles, fetchGroupDocumentVersionFiles} = Configuration.policyFetcher;
const TableRowWithVersionFeature : FC<TableRowWithVersionFeatureProps> =({
    docHudId,
    isDownloadable,
    languageList,
    natureList,
    isLocal,
    handleDelete,
    versionApiParameters,
}) => {
    const { state, dispatchWithMiddleWare} = useServerSideDocumentTableContext();
    const {locale} = useIntl;
    const file= state.files[docHubId];
    const selectedLangudage = state.fileMetadata.language[docHudId];
    const selectedNature = state.fileMetadata.nature[docHudId];
    const languageFeildTocuhed = state.fieldValidation.language[docHudId];
    const natureFeildTocuhed = state.fieldValidation.nature[docHudId];
    const isFileDeleteInProgress = state.filesPendingToBeDeleted.includes(docHudId);
    const versionDetails = state.fileVersionMap[docHudId];

    const onNatureChange = (e: PolicyNature | undefined) => {
        const apiStatus = e?.id === 1 ? VERSION_API_STATUS.FETCHNIG : VERSION_API_STATUS.TO_BE_FETCHED;
        dispatchWithMiddleWare(
            onChainFilterNatureChange({
                docHudId,
                nature:e,
                apiStatus,
            }),
        );

        if(e?.id === 1 && selectedLangudage) {
            fetchVersionFiles(versionApiParameters, e, selectedLanguage. isLocal).then(response => {
                dispatchWithMiddleWare(
                    onVersionApiSuccess({
                        docHudId,
                        versionApiParameters: response.length
                            ? VERSION_AVAILABILTY_STATUS.VERSIONS_AVAILABLE
                            : VERSION_AVAILABILTY_STATUS.VERSIONS_NOT_AVAILABLE,
                        versionFiles:response,
                    }),
                );
                !! response.length && dispatchWithMiddleWare(initiateVeriosnAction({id: docHudId, filesToVersion: response}));
            });
        }
    };


    const _preventActions = isFileDeleteInProgress || versionDetails.apiStatus === VERSION_API_STATUS.FETCHNIG;
    return(
        <tr>
            <td>
                <Tooltip title={file.name} arrow placement="top">
                    {
                        isDownloadable ? (
                            <a
                                id={'file-target-' + file.name}
                                style={{cursor: 'pointer'}}
                                className={'text-info'}
                                onClick={()=> downloadFile(file.file)}>
                                {ellipsiAt(file.name, 25)}
                            </a>
                        ):(
                            <span id={'file-target-' + file.name}>
                                {ellipsiAt(file.name, 25)}
                            </span>
                        )
                    }
                </Tooltip>
            </td>
            <td>{formatBytes(file.size, 2)}</td>
            <td>
                <Tooltip
                    title={selectedLangudage ? getLocaleData(selectedLangudage, MasterData.LANGUAGE) : ''} 
                    arrow 
                    placement="top">
                        <span id={'language-' + file.name}>
                            <AutoSugest 
                                onChange={e => dispatchWithMiddleWare(onChainFilterLanguageChange({docHudId, language: e}))}
                                onSearchRequested={(inputValue : string) =>
                                    Promise.resolve(
                                        languageList
                                            ?.filter(
                                                lang =>
                                                    lang.active &&
                                                (lang.category === Category.BOTH ||
                                                    (lang.category === Category.GLOBAL && !isLocal) ||
                                                    (lang.category === Category.LOCAL && isLocal) 
                                                ) && 
                                                (locale === 'en' ? lang.langEng : lang.langFra)
                                                    .toLoweCase()
                                                    .includes(inputValue.toLowerCase()),
                                            )
                                            .sort((a,b) => locale === 'en' ?a.langEng.toLoweCase().localeCompare(b.langEng.toLowerCase()): a.langEng.toLoweCase().localeCompare(b.length.toLoweCase())),
                                    )
                                }

                                renderOption={option => (option ? getLocaleData(option, MasterData.LANGUAGE) : '')}
                                shouldRequestSearch={inputValue => !!inputValue && inputValue.length > 0}
                                value={selectedLangudage}
                                getInputValueFromOption = {language =>
                                    language ? ellipsiAt(getLocaleData(language, MasterData.LANGUAGE), 10) : ''
                                }
                                placehlder="Search or Select"
                                size="md"
                                disabled={_preventActions}
                            />
                        </span>
                </Tooltip>
                {
                    <span className={languageFeildTocuhed && !selectedLangudage ? 'm-0 p-0 ' + styles.messageStyle : 'd-none'}>
                        <InfoOutLined color="error" style={{fontSize:10, marginRight:'3px'}} />
                        <FormattedMessage id="mandotoaryField" />
                    </span>
                }
            </td>
        </tr>
    )
}


export default TableRowWithVersionFeature;