import resolveTMDBImage from '../resolveTMDBImage';

describe('modules/TMDB/resolveTMDBImage', () => {
  it('should return a source path to tmdb image.', () => {
    const pattern = /^https?:\/\/.+\/test.png$/;

    const images = ['test.png', '/test.png'];

    images.forEach(image => {
      expect(resolveTMDBImage('w18', image)).toMatch(pattern);
    });
  });
});
