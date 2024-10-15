import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useHistory } from 'react-router-dom';
import ParentHome from './ParentHome';
import { useStoreActions } from '../../store/hooks';
import { Platform } from '../../utils/Enums';

jest.mock('react-router-dom', () => ({
useHistory: jest.fn(),
}));

jest.mock('../../store/hooks', () => ({
useStoreActions: jest.fn(),
}));

describe('ParentHome Component', () => {
let mockHistoryPush: jest.Mock;
let mockSetPlatform: jest.Mock;

beforeEach(() => {
 // Mock the useHistory hook
 mockHistoryPush = jest.fn();
 (useHistory as jest.Mock).mockReturnValue({ push: mockHistoryPush });

 // Mock the useStoreActions hook
 mockSetPlatform = jest.fn();
 (useStoreActions as jest.Mock).mockReturnValue(mockSetPlatform);
});

it('should render the component correctly', () => {
 const { getByText } = render(<ParentHome />);
 
 expect(getByText('MyP&')).toBeInTheDocument();
 expect(getByText('PPS')).toBeInTheDocument();
});

it('should call setPlatform with UNDECIDED on mount', () => {
 render(<ParentHome />);
 
 expect(mockSetPlatform).toHaveBeenCalledWith(Platform.UNDECIDED);
});

it('should redirect to PNP when "Go to MyP&" button is clicked', () => {
 const { getByText } = render(<ParentHome />);
 const button = getByText('Go to MyP&');
 
 fireEvent.click(button);

 expect(mockSetPlatform).toHaveBeenCalledWith(Platform.PNP);
 expect(mockHistoryPush).toHaveBeenCalledWith('/pnp/home');
});

it('should redirect to PPS when "Go to PPS" button is clicked', () => {
 const { getByText } = render(<ParentHome />);
 const button = getByText('Go to PPS');
 
 fireEvent.click(button);

 expect(mockSetPlatform).toHaveBeenCalledWith(Platform.PPS);
 expect(mockHistoryPush).toHaveBeenCalledWith('/home');
});
});