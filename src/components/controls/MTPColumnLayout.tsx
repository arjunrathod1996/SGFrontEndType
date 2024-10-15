import React from 'react';
import { Direction } from '../fields/data.type';

interface MTPColumnLayoutProps {
    label: string;
    id: string;
    direction?: Direction; // Optional
    required?: boolean; // Optional
    validationText?: string; // Optional
    validationState?: ValidityState; // Optional
    helpText?: string; // Optional
    // Add other props as needed
}

function MTPColumnLayout({
    label,
    id,
    direction,
    required,
    validationText,
    validationState,
    helpText,
}: MTPColumnLayoutProps) {
    return (
        <div className={`column-layout ${direction}`}>
            <label htmlFor={id}>
                {label} {required && <span>*</span>}
            </label>
            {validationText && <div>{validationText}</div>}
            {helpText && <div>{helpText}</div>}
        </div>
    );
}

export default MTPColumnLayout;
