
import { ReactNode } from "react";
import { Direction, Display, FieldType, Placement, ValidationState } from "./data.type";

export interface ToolTipProps {
    tooltip?: ReactNode;
    tooltipDuration?: number;
    tooltipPlacement?:Placement;
    fieldTooltip?:ReactNode;
}

export interface ChangeEventProps {
    onChange?:(fieldName:string, value: any, fieldType: FieldType, e?: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e:React.FocusEvent<any>) => void;
}

export interface ValidationProps {
    validationText?: string;
    validationState?:ValidationState;
}

export interface FieldProps {
    name?:string;
    display?:Display;
    direction?:Direction;
    readOnly?:boolean;
    required?:boolean;
    placeholder?:string;
    label:String;
}