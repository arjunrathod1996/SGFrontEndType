import React, { FC } from "react";
import { BusuDispensationMetaData, DocumentWithMetaData } from './types'; // Adjust the import according to your file structure
import { DispensationActivityEnum } from './enums'; // Adjust the import according to your file structure

interface DispensationDinalizedProps {
    metadata: BusuDispensationMetaData;
    files: DocumentWithMetaData[];
    previewFile: string;
}

const DispensationDinalized: FC<DispensationDinalizedProps> = ({ metadata, files, previewFile }) => {
    if (metadata) {
        const activity = ['DS0002', 'DS003'].includes(metadata.approvalStats.value)
            ? DispensationActivityEnum.CENTRAL_APPROVAL_APPROVED
            : DispensationActivityEnum.CENTRAL_APPROVAL_REJECTED;
        
        return (
            <div className="container" style={{marginBottom: '71px'}}>
                <MetaData metadata = {metadata} />
                <div className="px-0 my-5">
                    <Steps phase={activity} />
                </div>
                <div className="container bg-lvl4">
                    <Row>
                        <Col className="px-3" md="12">
                            <DisplayFile 
                                filesPresent={false}
                                previewFile={previewFile}
                                noDocumenttoPreview={!metadata.files.length}
                                openPopup={() => {}}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
        return null;
};

export default DispensationDinalized;

