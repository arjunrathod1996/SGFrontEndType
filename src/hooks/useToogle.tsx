import { useCallback, useState} from 'react';

export const useToggle = (initialState = false) : [boolean, () => void, () => void, () => void] => {
    const [state,setState] = useState<boolean>(initialState);
    const toggle = useCallback(() : void => setState(prevState => !prevState),[]);
    const open = useCallback((): void => setState(true),[]);
    const close = useCallback(() : void => setState(false),[]);
    return [state, toggle,open,close];
};