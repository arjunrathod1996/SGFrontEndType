import { persist } from "easy-peasy";
import translationMessage, { useLocale } from "../intl";
import { MessageKeyValue } from "../intl/types";


export interface IntlModel {
    locale: string;
    message: MessageKeyValue;
};

const intl : IntlModel = {
    locale: useLocale,
    message: translationMessage[useLocale] as any,
}

export default persist(intl);