import { conformsTo, isNumber, isString } from 'lodash';

import { mockProductionCompany } from '../productionCompany';

describe('modules/TMDB/mocks/productionCompany', () => {
  describe('mockProductionCompany', () => {
    it('should generate a productionCompany.', () => {
      const productionCompany = mockProductionCompany();

      const matched = conformsTo(productionCompany, {
        id: isNumber,
        name: isString,
        origin_country: isString,
        logo_path: (target: any) => target === null || isString(target),
      });

      expect(matched).toBeTruthy();
    });
  });
});
