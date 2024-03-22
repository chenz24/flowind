import { act, renderHook } from '@testing-library/react';
import { expect, vi } from 'vitest';

import { useInterval } from './use-interval';

const defaultTimeout = 2000;

const callback = vi.fn();

const setupTimer = (timeout: number = defaultTimeout) => ({
  timeout,
  advanceTimerToNextTick: () => vi.advanceTimersByTime(timeout),
});

const setupHook = (cb: (...args: any[]) => void = callback, timeout: number = defaultTimeout) =>
  renderHook(() => useInterval(cb, timeout));

describe('@flowind/hooks/use-interval', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.spyOn(global, 'setInterval');
    vi.spyOn(global, 'clearInterval');
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('initialize', () => {
    const { result } = setupHook();
    const { start, stop, toggle, active } = result.current;

    expect(typeof active).toBe('boolean');
    expect(typeof start).toBe('function');
    expect(typeof stop).toBe('function');
    expect(typeof toggle).toBe('function');
  });

  it('callback should NOT fire before calling start function', () => {
    const { advanceTimerToNextTick } = setupTimer();
    setupHook();
    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(setInterval).not.toHaveBeenCalled();
    expect(clearInterval).not.toHaveBeenCalled();
  });

  it('should run after timeout exceeded', () => {
    const { advanceTimerToNextTick } = setupTimer();
    const { result } = setupHook();

    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.start();
    });

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    expect(result.current.active).toBe(true);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(2);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(3);
  });

  it('should stop after stop fn call', () => {
    const { advanceTimerToNextTick } = setupTimer();

    const { result } = setupHook();

    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.start();
    });
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(result.current.active).toBe(true);

    act(() => {
      result.current.stop();
    });

    expect(clearInterval).toHaveBeenCalled();

    expect(result.current.active).toBe(false);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should toggle between active states', () => {
    const { advanceTimerToNextTick } = setupTimer();

    const { result } = setupHook();
    advanceTimerToNextTick();
    expect(callback).not.toHaveBeenCalled();
    expect(result.current.active).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(result.current.active).toBe(true);

    act(() => {
      result.current.toggle();
    });

    expect(clearInterval).toHaveBeenCalled();

    expect(result.current.active).toBe(false);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.toggle();
    });

    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), defaultTimeout);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(2);

    advanceTimerToNextTick();
    expect(callback).toHaveBeenCalledTimes(3);
  });
});
