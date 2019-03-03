import { appendSearchQueries, appendSearchQuery } from '../url';

describe('utils/url', () => {
  let url: URL;

  beforeEach(() => {
    url = new URL('test', 'http://0.0.0.0');
  });

  describe('appendSearchQuery', () => {
    it('should return a URL with the query.', () => {
      appendSearchQuery(url, 'a', 1);

      expect(url.searchParams.has('a')).toBeTruthy();
      expect(url.searchParams.getAll('a')).toContain('1');

      appendSearchQuery(url, 'b', 'b');

      expect(url.searchParams.has('b')).toBeTruthy();
      expect(url.searchParams.getAll('b')).toContain('b');
    });

    it('should ignore a property when it has an empty value.', () => {
      appendSearchQuery(url, 'na', '');
      expect(url.searchParams.has('na')).toBeFalsy();
    });
  });

  describe('appendSearchQueries', () => {
    it('should append queries except empty ones.', () => {
      const queries = {
        a: 1,
        b: 'b',
        na: '',
      };

      appendSearchQueries(url, queries);

      expect(url.searchParams.has('a')).toBeTruthy();
      expect(url.searchParams.getAll('a')).toContain('1');
      expect(url.searchParams.has('b')).toBeTruthy();
      expect(url.searchParams.getAll('b')).toContain('b');
      expect(url.searchParams.has('na')).toBeFalsy();
    });

    it('could set default value.', () => {
      interface IQueries {
        [key: string]: string;
      }

      const queries: IQueries | undefined = undefined;
      const defaultQueries: IQueries = {
        a: 'test',
      };

      appendSearchQueries(url, queries, defaultQueries);

      expect(url.searchParams.has('a')).toBeTruthy();
      expect(url.searchParams.getAll('a')).toContain('test');
    });
  });
});
