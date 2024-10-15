import { Stepper } from '@dex/stepper';
import React, { FunctionComponent} from 'react';
import { useStoreState } from '../../store/hooks';

interface IworkflowProps {
    activeStep : number;
};

interface StepInfos {
    title: string;
    status: 'completed' | 'in progress' | 'warning' | 'error' | 'inactive';
    description?:string;
    link?:string;
};

const exception = 'Exception Created';
const managerApproval = 'Manager Approval';
const ownerApproval = 'Owner Approval';

const WorkflowException: FunctionComponent<IworkflowProps> = props => {
    const intl = useStoreState(state => state.intl.locale);

    const datas : Array<StepInfos> = [
        { title: exception, status:'completed'},
        { title: managerApproval, status: 'in progress'},
        { title: ownerApproval, status:'inactive'},
    ];

    const [steps, setSteps] = React.useState<StepInfos[]>(datas);

    React.useEffect(() => {
        if(props.activeStep === 1){
            setSteps([
                {title: exception, status:'completed'},
                { title: managerApproval, status: 'completed'},
                { title: ownerApproval, status:'in progress'},
            ]);
        } else if(props.activeStep === -1){
            setSteps([
                {title: exception, status:'completed'},
                { title: managerApproval, status: 'error'},
                { title: ownerApproval, status:'inactive'},
            ]);
        } else if(props.activeStep === 2){
            setSteps([
                {title: exception, status:'completed'},
                { title: managerApproval, status: 'completed'},
                { title: ownerApproval, status:'completed'},
            ]);
        }else if(props.activeStep === -2){
            setSteps([
                {title: exception, status:'completed'},
                { title: managerApproval, status: 'completed'},
                { title: ownerApproval, status:'error'},
            ]);
        }
    },[props.activeStep, intl]);

    return (
        <div >
            <Stepper steps={steps} color="success" isVertical={false} />
        </div>
    );
};

export default WorkflowException;