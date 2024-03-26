import { randomId } from './random-id';

describe('@flowind/hooks/random-id', () => {
  it('returns random id with flowind- prefix', () => {
    expect(randomId().includes('flowind-')).toBe(true);
    expect(randomId()).toHaveLength(17);
  });
});
