import React from "react";
import { useStoreState } from "../../store/hooks"
import { Platform } from "../../utils/Enums";


const Header = () => {
    const { platform } = useStoreState(state => state.userInfo);

    let Header : React.FC;
    if(platform === Platform.PNP){
        Header = require('./PNP').default;
    }else if(platform === Platform.PPS){
        Header = require('./PPS').default;
    }else{
        Header = require('./Safe').default;
    }
    return <Header/>
};
