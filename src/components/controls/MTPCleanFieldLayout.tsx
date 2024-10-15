//import { ValidationText, FieldLayoutProps } from "@dex/rc-core"; // Import FieldLayoutProps from the correct module
import { ReactElement } from "react";
import { ToolTipProps } from "../fields/event.type";
import { DisplayProps } from ".";
import { FieldLayoutProps } from "../../@types/FieldLayout";
import ValidationText from "../../@types/ValidationText";


function MTPCleanFieldLayout({
    id,
    required,
    validationState,
    validationText,
    children,
}: Omit<FieldLayoutProps, 'tooltipPlacement' | 'tooltip'> & 
    ToolTipProps & 
    Omit<DisplayProps, 'row'> & { code?: string; labelHtml?: React.ReactNode }): ReactElement {
    return (
        <div className="form-group" data-testid="row-layout">
            <div className={`align-self-center _row_layout`}>
                <div className={`pr-0`}>
                    <div>{children({ id, required, validationState })}</div>
                    {validationText && (
                        <ValidationText type={validationState ? validationState : 'invalid'} label={validationText} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MTPCleanFieldLayout;
