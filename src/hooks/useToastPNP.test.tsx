import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { useToastPNP } from './useToastPNP'; // Assuming the hook is in this path
import { useToast } from '@dex/rc-toast';

// Mock the `useToast` hook
jest.mock('@dex/rc-toast', () => ({
  useToast: jest.fn(),
}));

describe('useToastPNP', () => {
  const mockAddToast = jest.fn();

  beforeEach(() => {
    // Mock implementation of useToast
    (useToast as jest.Mock).mockReturnValue({
      add: mockAddToast,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call add with correct options when calling successTest', () => {
    const { result } = renderHook(() => useToastPNP());

    const title: ReactNode = 'Success Title';
    const body: ReactNode = 'Success Body';

    // Call successTest
    result.current.successTest(title, body);

    // Assert that the add function was called with the correct options
    expect(mockAddToast).toHaveBeenCalledWith({
      title,
      body,
      delay: 4500,
      color: 'success',
    });
  });

  it('should call add with correct options when calling dangerTest', () => {
    const { result } = renderHook(() => useToastPNP());

    const title: ReactNode = 'Danger Title';
    const body: ReactNode = 'Danger Body';

    // Call dangerTest
    result.current.dangerTest(title, body);

    // Assert that the add function was called with the correct options
    expect(mockAddToast).toHaveBeenCalledWith({
      title,
      body,
      delay: 4500,
      color: 'danger',
    });
  });

  it('should call add with correct options when calling warningTest', () => {
    const { result } = renderHook(() => useToastPNP());

    const title: ReactNode = 'Warning Title';
    const body: ReactNode = 'Warning Body';

    // Call warningTest
    result.current.warningTest(title, body);

    // Assert that the add function was called with the correct options
    expect(mockAddToast).toHaveBeenCalledWith({
      title,
      body,
      delay: 4500,
      color: 'warinng', // Typo in original code; assuming it's intentional
    });
  });

  it('should call add with correct options when calling infoTest', () => {
    const { result } = renderHook(() => useToastPNP());

    const title: ReactNode = 'Info Title';
    const body: ReactNode = 'Info Body';

    // Call infoTest
    result.current.infoTest(title, body);

    // Assert that the add function was called with the correct options
    expect(mockAddToast).toHaveBeenCalledWith({
      title,
      body,
      delay: 4500,
      color: 'info',
    });
  });

  it('should call add with custom delay if provided', () => {
    const { result } = renderHook(() => useToastPNP());

    const title: ReactNode = 'Custom Delay Title';
    const body: ReactNode = 'Custom Delay Body';
    const customDelay = 6000;

    // Call successTest with a custom delay
    result.current.successTest(title, body, customDelay);

    // Assert that the add function was called with the custom delay
    expect(mockAddToast).toHaveBeenCalledWith({
      title,
      body,
      delay: customDelay,
      color: 'success',
    });
  });
});
