import * as faker from 'faker';
import { uniqueId } from 'lodash';

import { generateMulti, generateOne } from '../../../utils/generator';

export const mockGenre = () => ({
  id: Number(uniqueId()),
  name: faker.random.word(),
});

export const generateMockGenre = generateOne(mockGenre);

export const generateMockGenres = generateMulti(mockGenre);
