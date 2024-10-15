import { useStoreState } from "../store/hooks";


interface CentralApproverBusuDispensationProps {
    metadata : BususDispensationMetaData;
    updateFiles : (fiels: DocumentWithMetaData[]) => void;
    prevewFile:string;
}

const CentralApproverBusuDispensation: FC<CentralApproverBusuDispensationProps> = ({metadata, updateFiles,files, prevewFile}) => {
    const [tab, setTab] = useState(Tab.DECISION);
    const switchtab = (tab : Tab) => setTab(tab);
    const { isCenteralApprover, isSuperUser} = useStoreState(
        store => store.pnp.userRole,
    );
    if(metData) {
        return(
            <div className="container">
                <MetaData metadata = {metadata} />
                <div>
                    <Steps phase={DispensationActivityEnum.CENTRAL_APPROVAL_INPROGRESS} />
                </div>
                <div>
                    <Row>
                        <Col>
                            <DisplayFile  
                                filesPresent = {false}
                                previewUrl={prevewFile}
                                noDocumenttoPreview={!metadata.files.length}
                                openPopup={() => {}}    
                            />
                        </Col>
                        {
                            (
                                isSuperUser || 
                                (
                                    isCenteralApprover(metadata.risk.dmoain.id)
                                )
                            ) && 
                            <ActionWindow metadata={metadata} tab={tab} swithtab={switchtab} updateFiles={updateFiles} files={files} />
                        }
                    </Row>
                </div>
            </div>
        )
    }
    return null;
}

export default CentralApproverBusuDispensation;