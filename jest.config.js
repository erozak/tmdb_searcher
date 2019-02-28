module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/app'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/node_modules/jest-enzyme/lib/index.js', '<rootDir>/internals/testing/test-bundler.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
};
