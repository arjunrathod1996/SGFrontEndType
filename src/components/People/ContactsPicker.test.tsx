import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactsPickerComponent, { Contact } from './ContactsPickerComponent'; // Update with the correct file path
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ContactsPickerComponent', () => {
  let mockOnChange: jest.MockedFunction<(contacts: Contact[]) => void>;

  beforeEach(() => {
    mockOnChange = jest.fn();
    cleanup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle contact picker changes and make API calls', async () => {
    const mockContact: Contact = {
      id: '123',
      icId: 'ic123',
      bdrCommercialId: 'bdr123',
      bdrLegalId: 'legal123',
      igg: 'iggValue',
    };

    const event = {
      detail: {
        contacts: [mockContact],
      },
    };

    // Mocking the axios response
    mockedAxios.get.mockResolvedValueOnce({
      data: { igg: 'newIggValue' },
    });

    const { container } = render(<ContactsPickerComponent onChange={mockOnChange} />);

    const pickerElement = container.querySelector('ic-sgb4-simple-contact-picker');

    // Triggering the contact picker event
    fireEvent(pickerElement!, new CustomEvent('ic-sgb4-simple-contact-picker--changed', { detail: event.detail }));

    // Using waitFor to wait for the async updates to complete
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(`${window.env.CONTACT_API_ENDPOINT}${mockContact.id}`);
      expect(mockOnChange).toHaveBeenCalledWith([
        expect.objectContaining({ igg: 'newIggValue' })
      ]);
    });
  });
});
