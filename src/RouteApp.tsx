import { useStoreState } from "./store/hooks";



const RouteApp = () => {
    const userInfo = useStoreState(state => state.userInfo.user);
    return (
        <></>
    )
};

export default RouteApp;