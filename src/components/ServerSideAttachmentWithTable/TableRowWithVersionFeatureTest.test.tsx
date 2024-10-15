import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TableRowWithVersionFeature from './TableRowWithVersionFeature'; // Adjust the import path as needed
import { Configuration } from '../../../Configuration'; // Mock this
import { useIntl } from 'react-intl';
import { Tooltip } from 'reactstrap';
import { useServerSideDocumentTableContext } from '../../../context'; // Mock this

// Mocking the Configuration object and its methods
jest.mock('../../../Configuration', () => ({
  Configuration: {
    policyFetcher: {
      fetchLocalDocumentVersionFiles: jest.fn(), // Mocking fetchLocalDocumentVersionFiles method
      fetchGroupDocumentVersionFiles: jest.fn(), // Mocking fetchGroupDocumentVersionFiles method
    },
  },
}));

// Mocking the context hook used in the component
jest.mock('../../../context', () => ({
  useServerSideDocumentTableContext: jest.fn(), // Mocking the hook that provides context for the table
}));

// Mocking the internationalization hook (react-intl)
jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({
    locale: 'en', // Mocking locale as 'en' (English)
  })),
}));

describe('TableRowWithVersionFeature', () => {
  const mockDispatch = jest.fn(); // Mock function for dispatch actions
  const mockContextValue = {
    state: {
      // Mocking the state used in the component (files, metadata, etc.)
      files: {
        'docHubId1': {
          name: 'TestFile.pdf', // File name to be displayed
          size: 1024,           // File size
        },
      },
      fileMetadata: {
        language: { 'docHubId1': { id: 1, name: 'English' } },  // Mocking file language metadata
        nature: { 'docHubId1': { id: 1, name: 'General' } },     // Mocking file nature metadata
      },
      fieldValidation: {
        language: { 'docHubId1': false },  // Validation for language field (example: false = no error)
        nature: { 'docHubId1': false },    // Validation for nature field (example: false = no error)
      },
      filesPendingToBeDeleted: [],         // Mock empty pending delete files
      fileVersionMap: {
        'docHubId1': { apiStatus: 'TO_BE_FETCHED' },  // Mocking file version status
      },
    },
    dispatchWithMiddleWare: mockDispatch, // Mock dispatch function
  };

  // This mock ensures that useServerSideDocumentTableContext returns mockContextValue before each test
  beforeEach(() => {
    (useServerSideDocumentTableContext as jest.Mock).mockReturnValue(mockContextValue);
  });

  // Test case 1: Rendering file information and handling the download link click
  test('renders file information and handles downloadable link', () => {
    // Rendering the component wrapped in a <table> and <tbody> to match the actual DOM structure
    render(
      <table>
        <tbody>
          <TableRowWithVersionFeature
            docHubId="docHubId1"         // Providing docHubId
            isDownloadable={true}         // Enabling downloadable feature
            languageList={[]}             // Empty language list (mocked context handles it)
            natureList={[]}               // Empty nature list (mocked context handles it)
            isLocal={true}                // Indicates local file
            handleDelete={jest.fn()}      // Mocking delete handler function
            versionApiParameters={{       // Mock versionApiParameters for the component
              riskId: 123,
              sgCodeReference: 456,
              entities: ['entity1'],
              policyId: 789,
            }}
          />
        </tbody>
      </table>
    );

    // Assert that the file name "TestFile.pdf" is rendered on the page
    expect(screen.getByText(/TestFile\.pdf/i)).toBeInTheDocument();
    
    // Find the downloadable link (the file name itself) and simulate a click event
    const downloadLink = screen.getByText(/TestFile\.pdf/i);
    fireEvent.click(downloadLink);

    // Here we could assert that some mock function (e.g., downloadFile) gets called,
    // but since we haven't defined it, we just simulate the click action.
  });

  // Test case 2: Dispatching an action when the nature dropdown is changed
  test('dispatches action on nature change', async () => {
    // Rendering the component with natureList and versionApiParameters
    render(
      <table>
        <tbody>
          <TableRowWithVersionFeature
            docHubId="docHubId1"         // Providing docHubId
            isDownloadable={true}         // Downloadable enabled
            languageList={[]}             // Empty language list (mocked context handles it)
            natureList={[                 // Mock nature list for testing the dropdown
              { id: 1, name: 'General', active: true }, 
              { id: 2, name: 'Specific', active: true },
            ]}
            isLocal={true}                // Indicates local file
            handleDelete={jest.fn()}      // Mocking delete handler
            versionApiParameters={{       // Mock versionApiParameters for the component
              riskId: 123,
              sgCodeReference: 456,
              entities: ['entity1'],
              policyId: 789,
            }}
          />
        </tbody>
      </table>
    );

    // Simulate a change in the nature dropdown by finding "General" and switching to "Specific"
    const natureDropdown = screen.getByText('General');
    fireEvent.change(natureDropdown, { target: { value: 'Specific' } });

    // Wait for async actions (dispatch in this case)
    await waitFor(() => {
      // Ensure that the dispatch function is called with the correct action (nature change)
      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining({
        type: 'CHAIN_FILTER_NATURE_CHANGE',  // This type assumes how the action is dispatched
      }));
    });
  });
});
