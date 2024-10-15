import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './useToggle'; // Adjust path if necessary

describe('useToggle', () => {
  it('should initialize with the default state (false)', () => {
    const { result } = renderHook(() => useToggle());

    // The first value in the result is the state, which should be `false`
    expect(result.current[0]).toBe(false);
  });

  it('should initialize with the given initial state', () => {
    const { result } = renderHook(() => useToggle(true));

    // The first value in the result is the state, which should be `true`
    expect(result.current[0]).toBe(true);
  });

  it('should toggle the state when toggle function is called', () => {
    const { result } = renderHook(() => useToggle());

    // The initial state should be false
    expect(result.current[0]).toBe(false);

    // The second value is the toggle function
    act(() => {
      result.current[1](); // Call the toggle function
    });

    // The state should now be true
    expect(result.current[0]).toBe(true);

    // Call toggle again
    act(() => {
      result.current[1](); // Call the toggle function
    });

    // The state should now be false again
    expect(result.current[0]).toBe(false);
  });

  it('should set the state to true when open function is called', () => {
    const { result } = renderHook(() => useToggle(false));

    // The initial state should be false
    expect(result.current[0]).toBe(false);

    // The third value is the open function
    act(() => {
      result.current[2](); // Call the open function
    });

    // The state should now be true
    expect(result.current[0]).toBe(true);
  });

  it('should set the state to false when close function is called', () => {
    const { result } = renderHook(() => useToggle(true));

    // The initial state should be true
    expect(result.current[0]).toBe(true);

    // The fourth value is the close function
    act(() => {
      result.current[3](); // Call the close function
    });

    // The state should now be false
    expect(result.current[0]).toBe(false);
  });
});
