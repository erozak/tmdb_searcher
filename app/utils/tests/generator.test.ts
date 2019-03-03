import * as faker from 'faker';

import { generateMulti, generateOne } from '../generator';

describe('utils/generate', () => {
  interface IItem {
    id: number;
    name: string;
  }

  const fakeItem: IItem = {
    id: faker.random.number({ min: 1, precision: 0 }),
    name: faker.random.word(),
  };

  const generator = jest.fn(() => fakeItem);

  beforeEach(() => {
    generator.mockClear();
  });

  describe('generateOne', () => {
    let toGenerateOne: ReturnType<typeof generateOne>;

    beforeEach(() => {
      toGenerateOne = generateOne(generator);
    });

    it('should use the generator and create one.', () => {
      const item = toGenerateOne();

      expect(item).toEqual(fakeItem);
    });

    it('could specify parts of properties.', () => {
      const name = 'test';

      const item = toGenerateOne({ name });

      expect(item).toHaveProperty('name', name);
    });
  });

  describe('generateMulti', () => {
    let toGenrateMulti: ReturnType<typeof generateMulti>;

    beforeEach(() => {
      toGenrateMulti = generateMulti(generator);
    });

    it('should return a specified size of pack of item.', () => {
      const size = 5;
      const items = toGenrateMulti(size);

      expect(items.length).toBe(size);
      expect(generator.mock.calls.length).toBe(size);
    });

    it('could call specifyData when need.', () => {
      const name = 'test';
      const specifyData = jest.fn<Partial<IItem>, [number]>(() => ({ name }));
      const size = 2;
      const items = toGenrateMulti(size, specifyData);

      items.forEach((item, index) => {
        expect(item).toHaveProperty('name', name);
        expect(specifyData.mock.calls[index][0]).toBe(index);
      });
    });
  });
});
