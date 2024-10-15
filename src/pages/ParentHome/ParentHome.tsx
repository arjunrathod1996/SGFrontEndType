import React ,{FunctionComponent} from "react";
import { useHistory } from "react-router-dom";

import { useStoreActions } from "../../store/hooks";
import { Platform } from "../../utils/Enums";


const ParentHome: FunctionComponent = () => {
    const history = useHistory();
    const setPlatform = useStoreActions(action => action.userInfo.setPlatform);

    const redirect = (platform: Platform) => {
        setPlatform(platform);
        if(platform === Platform.PNP){
            history.push('/pnp/home');
        }else{
            history.push('/home');
        }
    };

    React.useEffect(() => {
        setPlatform(Platform.UNDECIDED);
    },[]);

    return(
        <div className="d-flex align-items-center justify-conetnt-center" style={{height: '840px'}}>
            <div className="card bg-lvl2 m-3" style={{width : '500px'}}>
                <div className="card-body">
                    <h3 className="card-title">MyP&#38;P</h3>
                    <p className="card-text">Normative documents are created and managed globally with or without SG integration</p>
                    <p className="text-right mb-0">
                        <button className="btn btn-info" onClick={() => redirect(Platform.PNP)}>Go to MyP&#38;P</button>
                    </p>
                </div>
            </div>
            <div className="card bg-lvl2 m-3" style={{width : '500px'}}>
                 <div className="card-body">
                    <h3 className="card-title">PPS</h3>
                    <p className="card-text">Normative documents are created and managed for regional end users</p>
                    <p className="text-right mb-0">
                        <button className="btn btn-info" onClick={() => redirect(Platform.PPS)}>Go to PPS</button>
                    </p>
                 </div>
            </div>
        </div>
    );
};

export default ParentHome;