import { ChangeEvent } from "react";

export type ColumnNumner = 12|6|4|3|2|8|10;
export interface DisplayProps {
    row: number;
    col: ColumnNumner;
    order?: number;
    className?:string;
    width?:string;
}

// export interface RadioBtnProps extends MTPFieldLayoutProps, ChangeEvent, OptionProps {
//     kind:'radioBtn';
//     value:string;
// }