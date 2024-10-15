
export type FieldType = 'select' | 'multi-select' | 'text-box' | 'combinational-select' | 'attachment' | 'date' | 'text=area';
export declare type Direction = "row" | "column";
export type ValidationState = 'warning' | 'invalid' | 'valid';
export type ColumnNumber = 12|6|4|3|2|8|10;
export interface Display {
    col: ColumnNumber;
    className?:string;
}

export type Placement = NonNullable<
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
>;