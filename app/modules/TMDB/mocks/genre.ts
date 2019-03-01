import { uniqueId } from 'lodash';
import * as faker from 'faker';

import { generateOne, generateMulti } from '../../../utils/generator';

export const mockGenre = () => ({
  id: Number(uniqueId()),
  name: faker.random.word(),
});

export const generateMockGenre = generateOne(mockGenre);

export const generateMockGenres = generateMulti(mockGenre);
