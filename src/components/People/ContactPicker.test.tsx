import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'; // for extra matchers like 'toBeInTheDocument'
import { Configuration } from "../../Configuration";


// Mock the Referential Data Fetcher
jest.mock("../../Configuration", () => ({
    Configuration: {
        referentialDataFetcher: {
            fetchPeopleListByContactId: jest.fn(),
        },
    },
}));

describe('ContactPickerComponent', () => {
    let onChangeMock: jest.Mock;
    let mockEvent: any;

    beforeEach(() => {
        onChangeMock = jest.fn(); // create a mock function for the onChange prop

        // Create a mock event with contacts
        mockEvent = {
            detail: {
                contacts: [
                    {
                        id: '123',
                        icId: 'ic1',
                        bdrCommercialId: 'bc1',
                        bdrLegalId: 'bl1',
                        igg: '',
                    },
                ],
            },
        };
    });

    afterEach(() => {
        jest.clearAllMocks(); // clear all mocks after each test
    });

    it('should add the event listener on componentDidMount and remove it on componentWillUnmount', () => {
        const addEventListenerSpy = jest.spyOn(window.HTMLElement.prototype, 'addEventListener');
        const removeEventListenerSpy = jest.spyOn(window.HTMLElement.prototype, 'removeEventListener');

        const { unmount } = render(<ContactPickerComponent onChange={onChangeMock} controlId="testId" />);

        expect(addEventListenerSpy).toHaveBeenCalledWith(
            'ic-sgb4-simple-contact-picker--changed',
            expect.any(Function)
        );

        unmount(); // simulate component unmount

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            'ic-sgb4-simple-contact-picker--changed',
            expect.any(Function)
        );
    });

    it('should render the contact picker with correct props', () => {
        render(<ContactPickerComponent onChange={onChangeMock} controlId="testId" />);

        const picker = screen.getByTestId("testId");
        expect(picker).toBeInTheDocument(); // Check if the component is in the document
        expect(picker).toHaveAttribute('sso-v2', 'true');
        expect(picker).toHaveAttribute('display-option', 'email');
        expect(picker).toHaveAttribute('internal-only', 'true');
    });

    it('should call onChange when contacts are updated and fetch igg', async () => {
        const fetchMock = Configuration.referentialDataFetcher.fetchPeopleListByContactId as jest.Mock;
        fetchMock.mockResolvedValue({ igg: 'test_igg' }); // Mocking the fetcher response

        render(<ContactPickerComponent; onChange={onChangeMock} controlId="testId" />);

        const picker = screen.getByTestId("testId");

        fireEvent(
            picker,
            new CustomEvent('ic-sgb4-simple-contact-picker--changed', { detail: mockEvent.detail })
        );

        // Wait for the mock fetch call
        expect(fetchMock).toHaveBeenCalledWith('123');
        expect(onChangeMock).toHaveBeenCalledWith([
        {
            id: '123',
            icId: 'ic1',
            bdrCommercialId: 'bc1',
            bdrLegalId: 'bl1',
            igg: 'test_igg',
        },
    ]);
    });
});
