import { ToastOptions, useToast} from '@dex/rc-toast';
import { ReactNode } from 'react';

export function useToastPNP() {
    const { add : toast} = useToast();
    const add = (toastDetails: ToastOptions) => toast(toastDetails);
    const successTest = (title: ReactNode, body: ReactNode, delay = 4500) =>
        toast({ title, body,delay,color:'success'});
    const dangerTest = (title: ReactNode, body: ReactNode, delay = 4500) =>
        toast({ title, body,delay,color:'danger'});
    const warningTest = (title: ReactNode, body: ReactNode, delay = 4500) =>
        toast({ title, body,delay,color:'warinng'});
    const infoTest = (title: ReactNode, body: ReactNode, delay = 4500) =>
        toast({ title, body,delay,color:'info'});

    return {add,successTest,dangerTest,warningTest,infoTest};
}