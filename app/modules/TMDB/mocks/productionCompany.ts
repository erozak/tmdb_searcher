import { uniqueId } from 'lodash';
import * as faker from 'faker';

import { generateOne, generateMulti } from '../../../utils/generator';

export const mockProductionCompany = () => ({
  name: faker.company.companyName(),
  id: Number(uniqueId()),
  logo_path: faker.random.boolean() ? `/${faker.system.fileName('jpg')}` : '',
  origin_country: faker.address.countryCode(),
});

export const generateMockProductionCompany = generateOne(mockProductionCompany);

export const generateMockProductionCompanies = generateMulti(mockProductionCompany);
