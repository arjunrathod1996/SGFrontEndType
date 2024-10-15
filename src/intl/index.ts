import en from "./en.messages";
import { flatten } from "./flatten";
import fr from "./fr.messages";
import { MessageKeyValue } from "./types";

export * from './types';

export const useLocale = navigator.language.toLowerCase().split(/[_-]+/)[0];


const translationMessage: MessageKeyValue = {
    en: flatten(en), // Assuming 'en' is defined elsewhere
    fr: flatten(fr), // Assuming 'fr' is defined elsewhere
};

export default translationMessage;
