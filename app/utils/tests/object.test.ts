import { travel } from '../object';

describe('utils/object', () => {
  describe('travel', () => {
    it('should travel around the object with iteratee.', () => {
      const target = {
        a: 1,
        b: [1],
        c: 't',
      };
      const iteratee = jest.fn();

      travel(target, iteratee);

      expect(iteratee.mock.calls.length).toBe(Object.keys(target).length);
      expect(iteratee.mock.calls[0][0]).toMatchObject(['a', target.a]);
      expect(iteratee.mock.calls[1][0]).toMatchObject(['b', target.b]);
      expect(iteratee.mock.calls[2][0]).toMatchObject(['c', target.c]);
    });
  });
});
