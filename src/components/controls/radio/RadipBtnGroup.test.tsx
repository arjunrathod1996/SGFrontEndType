// RadioBtnGroup.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioBtnGroup from './RadioBtnGroup'; // Adjust the import based on your file structure

describe('RadioBtnGroup Component', () => {
    const mockOnChange = jest.fn();
    const options = ['One', 'Two', 'Three'];

    describe('when rendered', () => {
        it('should display all radio button options', () => {
           const {getByLabelText} =  render(
            <RadioBtnGroup 
                direction='column'
                name="test-radio"
                onChange={mockOnChange}
                options={options}
                getSelectValueFromOption={(option: any) => (option ? option : '')}
                isOptionalEqual={(opt1, opt2) => opt1 === opt2}
                renderOptionContent={(option) => option}
                display={{row: 1, col:12}}
                label="test-radio"
                kind="radioBtn"
                />
            );

           options.forEach(option => {
            const input = getByLabelText(option);
            expect(input).toBeInTheDocument();
            expect(input).toHaveAttribute('type','radio');
           })
        });
    });

    
});
